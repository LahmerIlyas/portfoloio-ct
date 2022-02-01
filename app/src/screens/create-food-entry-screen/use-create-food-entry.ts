import { useNavigation } from '@react-navigation/native';
import { CreateFoodEntryDto } from './../../../../packages/backend/src/modules/food-entries/dto/create-food-entry.dto';
import { useCallback } from 'react';
import { useCreateFoodEntry as useAction } from '../../api';
import { CreateFoodEntryScreenNavigationProp } from '../../navigation';

export function useCreateFoodEntry() {
  const { mutateAsync } = useAction();
  const navigation = useNavigation<CreateFoodEntryScreenNavigationProp>();
  const createFoodEntry = useCallback(async (values: CreateFoodEntryDto) => {
    try {
      const { data } = await mutateAsync({
        data: values,
      });
      console.log(data);
      navigation.goBack();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }, []);

  return {
    createFoodEntry,
  };
}
