import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export const FlatListLoadingMoreSpinner: React.FC = () => {
  return (
    <View
      style={{ height: 80, alignItems: 'center', justifyContent: 'center' }}
    >
      <ActivityIndicator size={'large'} color={'#1A237E'} />
    </View>
  );
}
