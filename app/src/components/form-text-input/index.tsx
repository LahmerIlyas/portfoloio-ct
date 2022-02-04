import { useField } from 'formik';
import React, { Fragment } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

type FormTextInputProps = {
  title: string;
  field: string;
  placeholder?: string;
};

export const FormTextInput: React.FC<FormTextInputProps> = (props) => {
  const [field, { touched, error, initialValue }, helpers] = useField(
    props.field,
  );
  return (
    <View style={{ width: '100%', marginVertical: 16 }}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        onBlur={field.onBlur(props.field)}
        defaultValue={initialValue}
        style={styles.textInput}
        onChangeText={helpers.setValue}
        placeholder={props.placeholder}
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
    paddingVertical: 24,
    paddingHorizontal: 24,
    color: '#666666',
    fontFamily: 'Signika-Regular',
    fontSize: 16,
  },
  error: {
    color: 'red',
  },
});
