import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import {
    CreateFoodEntryScreen,
    HomeScreen,
    LoginScreen,
    OnBoardingScreen,
    RegisterScreen,
    SplashScreen,
    UserStatsScreen
} from '../screens';


export type RootStackParamList = {
  CreateFoodEntryScreen: undefined;
  HomeScreen: undefined;
  LoginScreen: undefined;
  OnBoardingScreen: undefined;
  RegisterScreen: undefined;
  SplashScreen: undefined;
  UserStatsScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function AppSwitchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateFoodEntryScreen" component={CreateFoodEntryScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="UserStatsScreen" component={UserStatsScreen} />
    </Stack.Navigator>
  );
}

export type CreateFoodEntryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateFoodEntryScreen'>;
export type HomeScreenScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;
export type OnBoardingScreenScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OnBoardingScreen'>;
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;
export type SplashScreenScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SplashScreen'>;
export type UserStatsScreenScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UserStatsScreen'>;
