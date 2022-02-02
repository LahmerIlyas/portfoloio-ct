import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FoodEntrySerializer } from '../../../api';
import FoodEntryIcon from './food-entry-icon';

type FoodEntry = FoodEntrySerializer & {};

export const FoodEntry: React.FC<FoodEntrySerializer> = (props) => {
  return (
    <View style={styles.container}>
      <FoodEntryIcon style={styles.icon} />
      <View>
        <Text style={styles.caloriesCount}>{props.calories_count} Cal</Text>
        <Text style={styles.foodName}>{props.food_name}</Text>
        <Text style={styles.date}>{props.taken_at.split('T')[0]}</Text>
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
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    marginRight: 16,
  },
  caloriesCount: {
    color: '#6CB663',
    fontSize: 12,
    fontFamily: 'Signika-SemiBold',
  },
  foodName: {
    color: '#2E2E2E',
    fontSize: 16,
    fontFamily: 'Signika-Regular',
    marginVertical: 8,
  },
  date: {
    color: '#767676',
    fontSize: 12,
    fontFamily: 'Signika-Regular',
  },
});
