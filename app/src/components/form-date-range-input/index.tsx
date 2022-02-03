import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import DatePicker from '@react-native-community/datetimepicker';
import { useEffect } from 'react';

type FormDateRangeInputProps = {
  onChange?: ({ from, to }: { from?: string; to?: string }) => void | undefined;
};

export const FormDateRangeInput: React.FC<FormDateRangeInputProps> = (
  props,
) => {
  const [date, setDate] = useState<{ from?: string; to?: string }>({
    from: undefined,
    to: undefined,
  });
  const [showFromDateInput, setShowFromDateInput] = useState(false);
  const [showToDateInput, setShowToDateInput] = useState(false);

  const setFomDate = useCallback((date) => {
    setShowFromDateInput(false);
    if (date.type === 'dismissed') return;
    setDate((previous) => ({
      ...previous,
      from: new Date(date.nativeEvent.timestamp).toISOString().split('T')[0],
    }));
  }, []);

  const setToDate = useCallback((date) => {
    setShowToDateInput(false);
    if (date.type === 'dismissed') return;
    setDate((previous) => ({
      ...previous,
      to: new Date(date.nativeEvent.timestamp).toISOString().split('T')[0],
    }));
  }, []);

  useEffect(() => {
    if (props.onChange) {
      props.onChange(date);
    }
  }, [date]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>From</Text>
      <Pressable
        style={styles.dateButtonContainer}
        onPress={() => setShowFromDateInput(true)}
      >
        <Text>{date.from ? date.from : ''}</Text>
      </Pressable>
      {showFromDateInput && (
        <DatePicker
          value={date?.from ? new Date(date?.from) : new Date()}
          onChange={setFomDate}
        />
      )}
      <Text style={styles.title}>To</Text>
      <Pressable
        style={styles.dateButtonContainer}
        onPress={() => setShowToDateInput(true)}
      >
        <Text>{date.from ? date.to : ''}</Text>
      </Pressable>
      {showToDateInput && (
        <DatePicker
          value={date?.to ? new Date(date?.to) : new Date()}
          onChange={setToDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateButtonContainer: {
    flexGrow: 1,
    backgroundColor: 'gray',
    paddingVertical: 16,
    paddingHorizontal: 8,
    opacity: 0.5,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  title: {
    fontFamily: 'Signika-SemiBold',
  },
});
