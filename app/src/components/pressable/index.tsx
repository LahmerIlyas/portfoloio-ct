import React, { useCallback } from 'react';
import {
  GestureResponderEvent,
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
} from 'react-native';
import { debounce } from 'lodash';
import * as Haptics from 'expo-haptics';
import { ImpactFeedbackStyle } from 'expo-haptics';

type PressableProps = NativePressableProps & {
  debounce_duration?: number;
};
export const Pressable: React.FC<PressableProps> = ({
  debounce_duration,
  onPress,
  ...other
}) => {
  const onClick = useCallback(
    (event: GestureResponderEvent) => {
      if (onPress) {
        onPress(event);
        Haptics.impactAsync(ImpactFeedbackStyle.Medium);
      }
    },
    [onPress],
  );

  const handler = useCallback(debounce(onClick, debounce_duration || 1000), []);

  return <NativePressable {...other} onPress={handler} />;
};
