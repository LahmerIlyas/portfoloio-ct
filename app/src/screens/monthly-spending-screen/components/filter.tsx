import React, { useCallback, useState } from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

type FilterProps = {
  setShowOnlyExceedingMonths: (v: boolean) => void;
  showOnlyExceedingMonths: boolean;
};

export const Filter: React.FC<FilterProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>show only months where I exceeded the monthly limit</Text>
      <Switch
        thumbColor={'red'}
        trackColor={{ false: 'gray', true: 'red' }}
        value={props.showOnlyExceedingMonths}
        onChange={() => props.setShowOnlyExceedingMonths((old) => !old)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 32,
    alignItems: 'center',
  },
});
