import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { CreateFoodEntryDto, useCreateFoodEntry as useAction } from '../../api';
import { CreateFoodEntryScreenNavigationProp } from '../../navigation';
import { useUserFoodEntries } from '../home-screen/useUserFoodEntries';

export function useCreateFoodEntry() {
  const { mutateAsync } = useAction();
  const navigation = useNavigation<CreateFoodEntryScreenNavigationProp>();
  const { refetch } = useUserFoodEntries();
  const createFoodEntry = useCallback(async (values: CreateFoodEntryDto) => {
    console.log('creteFoodEntry', values);
    try {
      await mutateAsync({
        data: { ...values, user_id: 0 },
      });
      refetch();
      navigation.goBack();
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  return {
    createFoodEntry,
  };
}
