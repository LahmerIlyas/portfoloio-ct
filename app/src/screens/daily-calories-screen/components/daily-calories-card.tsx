import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DailyCalorieSerializer } from '../../../api';
import Icon from './icon';

type DailyCaloriesCardProps = DailyCalorieSerializer & {};
export const DailyCaloriesCard: React.FC<DailyCaloriesCardProps> = (props) => {
  return (
    <View style={styles.container}>
      <Icon style={{ marginRight: 16 }} />
      <View>
        <Text style={styles.date}>{props.date}</Text>
        <Text style={styles.count}>{props.calories_count}Cal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF7EE',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    borderRadius: 8,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingHorizontal: 16,
    marginHorizontal: 32,
    elevation: 5,
  },
  count: {
    color: '#767676',
    fontSize: 16,
    fontFamily: 'Signika-SemiBold',
    marginVertical: 8,
  },
  date: {
    color: '#2E2E2E',
    fontSize: 18,
    fontFamily: 'Signika-SemiBold',
  },
});
