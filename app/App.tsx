import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState, } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Sentry from 'sentry-expo';
import Updates from 'expo-updates';
import { QueryClientProvider } from 'react-query';
import { AppContainer } from './src/navigation';
import { queryClient } from './src/api';

export default function App() {
  const [updateDone, setUpdateDone] = useState(false);

  const [fontsLoaded] = useFonts({
    'Signika-Bold': require('./assets/fonts/Signika-Bold.ttf'),
    'Signika-Light': require('./assets/fonts/Signika-Light.ttf'),
    'Signika-Medium': require('./assets/fonts/Signika-Medium.ttf'),
    'Signika-Regular': require('./assets/fonts/Signika-Regular.ttf'),
    'Signika-SemiBold': require('./assets/fonts/Signika-SemiBold.ttf'),
  });

  const bootstrap = useCallback(async () =>{
    try {
      const { isNew } = await Updates.fetchUpdateAsync();
      if (isNew) {
        await Updates.reloadAsync();
      } else {
        setUpdateDone(true);
      }
    } catch (error) {
      Sentry.Browser.captureException(error);
      setUpdateDone(true);
    }
  }, []);

  useEffect(() => {
    void bootstrap();
  }, []);

  if (!fontsLoaded || !updateDone) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <QueryClientProvider client={queryClient}>
        <AppContainer />
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
