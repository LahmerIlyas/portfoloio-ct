import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  CreateFoodEntryScreen,
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  RegisterScreen,
  SplashScreen,
  UserStatsScreen,
  MonthlySpendingScreen,
  DailyCaloriesScreen,
} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

export type RootStackParamList = {
  CreateFoodEntryScreen: undefined;
  AppBottomTab: undefined;
  LoginScreen: undefined;
  OnBoardingScreen: undefined;
  RegisterScreen: undefined;
  SplashScreen: undefined;
  UserStatsScreen: undefined;
};

export type AppBottomTabParamList = {
  HomeScreen: undefined;
  DailyCaloriesScreen: undefined;
  MonthlySpendingScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<AppBottomTabParamList>();

export function AppBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#91C788',
        tabBarStyle: {},
        tabBarLabelStyle: {
          fontFamily: 'Signika-Regular',
          fontSize: 16,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name={'home'} color={color} size={24} />;
          },
          tabBarLabel: 'Home',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name={'fastfood'} color={color} size={24} />;
          },
          tabBarLabel: 'Calories',
        }}
        name="DailyCaloriesScreen"
        component={DailyCaloriesScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialIcons name={'attach-money'} color={color} size={24} />
            );
          },
          tabBarLabel: 'Spending',
        }}
        name="MonthlySpendingScreen"
        component={MonthlySpendingScreen}
      />
    </Tab.Navigator>
  );
}

export function AppSwitchNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        gestureEnabled: false,
        gestureDirection: 'vertical',
      }}
    >
      <Stack.Screen
        name="CreateFoodEntryScreen"
        component={CreateFoodEntryScreen}
      />
      <Stack.Screen name="AppBottomTab" component={AppBottomTab} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="UserStatsScreen" component={UserStatsScreen} />
    </Stack.Navigator>
  );
}

export type CreateFoodEntryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CreateFoodEntryScreen'
>;
export type HomeScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;
export type OnBoardingScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'OnBoardingScreen'
>;
export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RegisterScreen'
>;
export type SplashScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;
export type UserStatsScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UserStatsScreen'
>;
