import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const FlatListFullscreenLoadingSpinner: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size={'large'} color={'#91C788'} />
    </View>
  );
};
