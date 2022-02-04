import React, { useCallback } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Logo from './components/Logo';
import Swiper from 'react-native-swiper';
import { SwiperItem } from './components/swiper-item';
import Step1 from './components/step1.illustration';
import Step2 from './components/step2.illustration';
import Step3 from './components/step3.illustration';
import { useNavigation } from '@react-navigation/native';
import { OnBoardingScreenScreenNavigationProp } from '../../navigation/main';

export const OnBoardingScreen: React.FC = (props) => {
  const navigation = useNavigation<OnBoardingScreenScreenNavigationProp>();
  const goToLoginScreen = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
      <View style={{ height: '60%', width: '100%', alignItems: 'center' }}>
        <Swiper
          showsButtons={false}
          dotColor="#FFC0B8"
          activeDotColor="#FF8473"
          autoplay
        >
          <View>
            <SwiperItem
              title="Eat Healthy"
              description="Maintaining good health should be the primary focus of everyone."
            >
              <Step1 />
            </SwiperItem>
          </View>
          <View>
            <SwiperItem
              title="Healthy Recipes"
              description="Browse thousands of healthy recipes from all over the world."
            >
              <Step2 />
            </SwiperItem>
          </View>
          <View>
            <SwiperItem
              title="Track Your Health"
              description="With amazing inbuilt tools you can track your progress."
            >
              <Step3 />
            </SwiperItem>
          </View>
        </Swiper>
      </View>
      <Pressable
        onPress={goToLoginScreen}
        style={styles.button}
        android_ripple={{ radius: 100 }}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
      <Text style={styles.heading}>
        Already Have An Acount?
        <Text style={styles.login} onPress={goToLoginScreen}>
          {' '}
          Log In
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  button: {
    backgroundColor: '#91C788',
    paddingVertical: 24,
    borderRadius: 24,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Signika-SemiBold',
    fontSize: 25,
  },
  heading: {
    color: '#7C7C7C',
    fontFamily: 'Signika-Regular',
    fontSize: 17,
  },
  login: {
    color: '#91C788',
    fontFamily: 'Signika-Regular',
    fontSize: 17,
  },
});
