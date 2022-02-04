import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useLogin } from './use-login';
import {
  FormTextInput,
  FormPasswordInput,
  FormSubmitButton,
} from '../../components';
import Logo from './components/Logo';
import { LoginFormValidationSchema } from './schema';
import AwesomeAlert from 'react-native-awesome-alerts';

export const LoginScreen: React.FC = (props) => {
  const { login, isError, clearError } = useLogin();
  return (
    <View style={styles.container}>
      <Logo style={{ marginBottom: 32 }} />
      <Formik
        initialValues={{
          email: 'ilyaslahmer93@gmail.com',
          password: '123456',
        }}
        onSubmit={login}
        validationSchema={LoginFormValidationSchema}
      >
        <Fragment>
          <FormTextInput title="Email" field="email" />
          <FormPasswordInput title="Password" field="password" />
          <FormSubmitButton
            title="Login"
            style={{ width: '100%', marginTop: 16 }}
          />
        </Fragment>
      </Formik>
      <AwesomeAlert
        show={isError}
        showProgress={false}
        title="Error"
        message="Wrong Password/email!"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={false}
        cancelText="Ok"
        confirmButtonColor="#DD6B55"
        onCancelPressed={clearError}
        onConfirmPressed={clearError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 24,
  },
});
