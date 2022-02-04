import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SplashScreenScreenNavigationProp } from '../../navigation/main';
import Logo from './components/Logo';

export const SplashScreen: React.FC = (props) => {
  const navigation = useNavigation<SplashScreenScreenNavigationProp>();
  useEffect(() => {
    setTimeout(() => navigation.navigate('OnBoardingScreen'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91C788',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
