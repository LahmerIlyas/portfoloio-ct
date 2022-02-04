import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type SwiperItemProps = {
  title: string;
  description: string;
};

export const SwiperItem: React.FC<SwiperItemProps> = ({
  title,
  description,
  children,
  ...other
}) => {
  return (
    <View style={styles.container} {...other}>
      {children}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontFamily: 'Signika-SemiBold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 24,
  },
  description: {
    color: '#00000073',
    fontFamily: 'Signika-Medium',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 8,
  },
});
