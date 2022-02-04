import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useQueryClient } from 'react-query';
import { CreateFoodEntryDto, useCreateFoodEntry as useAction } from '../../api';
import { CreateFoodEntryScreenNavigationProp } from '../../navigation';

export function useCreateFoodEntry() {
  const { mutateAsync } = useAction();
  const navigation = useNavigation<CreateFoodEntryScreenNavigationProp>();
  const client = useQueryClient();

  const createFoodEntry = useCallback(async (values: CreateFoodEntryDto) => {
    console.log(values);
    try {
      await mutateAsync({
        data: values,
      });
      client.invalidateQueries('daily-calories');
      client.invalidateQueries('monthly-spending');
      client.invalidateQueries('food-entries');

      navigation.goBack();
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  return {
    createFoodEntry,
  };
}
