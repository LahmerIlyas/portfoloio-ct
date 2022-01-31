import { useCallback } from 'react';
export function useLogin() {
    const login = useCallback((values) => {
        console.log(values);
    }, []);
    return {
        login
    }
}