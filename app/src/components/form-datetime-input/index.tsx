import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { useField } from 'formik';
import DateTimePicker from '@react-native-community/datetimepicker';

type FormDateTimeInputProps = {
  title: string;
  field: string;
};

export const FormDateTimeInput: React.FC<FormDateTimeInputProps> = (props) => {
  const [field, meta, helpers] = useField(props.field);
  const { setValue } = helpers;

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  /*  useEffect(() => {
    setValue(date);
  }, [date]);
*/
  const onClick = useCallback(() => {
    setShow((current) => !current);
  }, []);

  const onChange = useCallback((event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setValue(date);
  }, []);

  return (
    <View style={styles.container}>
      {props.title && <Text style={styles.title}>{props.title}</Text>}
      <Pressable onPress={onClick} style={styles.button}>
        <Text style={styles.textButton}>
          {date.toISOString().split('T')[0]}
        </Text>
      </Pressable>
      {show && (
        <DateTimePicker value={date} mode="datetime" onChange={onChange} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  textButton: {},
  title: {
    color: 'black',
    fontFamily: 'Signika-Regular',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    marginTop: 8,
    paddingVertical: 24,
    paddingHorizontal: 24,
    color: '#666666',
    fontFamily: 'Signika-Regular',
    fontSize: 16,
  },
});
