import { useField } from 'formik';
import React, { Fragment } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

type FormPasswordInputProps = {
  title: string;
  field: string;
};

export const FormPasswordInput: React.FC<FormPasswordInputProps> = (props) => {
  const [field, { touched, error, initialValue }, helpers] = useField<string>(
    props.field,
  );
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        onBlur={field.onBlur(props.field)}
        style={styles.textInput}
        defaultValue={initialValue}
        onChangeText={helpers.setValue}
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="password"
        secureTextEntry={true}
        placeholder={'Enter your password'}
        placeholderTextColor={'#F4F4F4'}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontFamily: 'Signika-Regular',
    fontSize: 18,
  },
  textInput: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    marginTop: 8,
    paddingHorizontal: 24,
    paddingVertical: 24,
    color: '#666666',
    fontFamily: 'Signika-Regular',
    fontSize: 16,
  },
  error: {
    color: 'red',
  },
});
