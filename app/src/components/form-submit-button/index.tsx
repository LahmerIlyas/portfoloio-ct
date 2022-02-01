import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import { useFormikContext } from 'formik';

interface FormSubmitButtonProps {
  title: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle> | undefined;
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = (props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <Pressable
      style={[styles.container, props.style]}
      onPress={handleSubmit}
      android_ripple={{ radius: 100 }}
    >
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(145, 199, 136)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 16,
    borderRadius: 3,
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    color: '#FFFFFF',
    fontFamily: 'Signika-Medium',
  },
});
