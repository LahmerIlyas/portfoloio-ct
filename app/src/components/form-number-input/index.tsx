import { useField } from 'formik';
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

type FormNumberInputProps = {
  title: string;
  field: string;
  placeholder?: string;
};

export const FormNumberInput: React.FC<FormNumberInputProps> = (props) => {
  const [field, { touched, error, initialValue }, helpers] = useField(
    props.field,
  );

  return (
    <View style={{ width: '100%', marginVertical: 16 }}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput
        onBlur={field.onBlur(props.field)}
        keyboardType="numeric"
        defaultValue={initialValue}
        style={styles.textInput}
        onChangeText={(value) => helpers.setValue(parseInt(value))}
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
