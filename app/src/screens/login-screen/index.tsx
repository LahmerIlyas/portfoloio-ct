import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Formik} from 'formik';
import { useLogin } from './use-login';
import { FormTextInput } from '../../components';
import Logo from './components/Logo';
export const LoginScreen: React.FC = (props) => {
    const { login } = useLogin();
    return (
        <View style={styles.container}>
            <Logo />
            <Formik initialValues={{}} onSubmit={login}>
                <FormTextInput />
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 36,
        alignItems: 'center',
        width: '100%',
    }
})