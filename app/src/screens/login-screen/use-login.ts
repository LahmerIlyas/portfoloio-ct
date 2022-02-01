import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { LoginScreenNavigationProp } from '../../navigation';

export function useLogin() {
    const navigation = useNavigation<LoginScreenNavigationProp>();

    const login = useCallback((values) => {
        console.log(values);
        navigation.navigate('HomeScreen');
    }, []);
    return {
        login
    }
}