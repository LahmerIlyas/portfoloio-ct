import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { LoginScreenNavigationProp } from '../../navigation';
import { LoginDto, useLogin as useBackendLogin } from '../../api';
import Axios from 'axios';

export function useLogin() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { mutateAsync } = useBackendLogin();

  const login = useCallback(async (values: LoginDto) => {
    try {
      const { data } = await mutateAsync({
        data: values,
      });
      Axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      navigation.navigate('HomeScreen');
    } catch (e) {
      console.log(JSON.stringify(e));
    }
  }, []);
  return {
    login,
  };
}
