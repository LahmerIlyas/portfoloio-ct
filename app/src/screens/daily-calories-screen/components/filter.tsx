import React from 'react';
import { Switch, View, Text, StyleSheet } from 'react-native';

type FilterProps = {
  setShowOnlyExceedingDays: (v: boolean) => void;
  showOnlyExceedingDays: boolean;
};

export const Filter: React.FC<FilterProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>show only days where I exceeded the daily limit</Text>
      <Switch
        thumbColor={'red'}
        trackColor={{ false: 'gray', true: 'red' }}
        value={props.showOnlyExceedingDays}
        onChange={() => props.setShowOnlyExceedingDays((old) => !old)}
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
