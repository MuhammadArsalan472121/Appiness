import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LoginScreen from '../screens/loginScreen';
import SLoadingScreen from '../screens/signinLoadingScreen';
import RegisterScreen from '../screens/registerScreen';
import AppIntroSlider from '../screens/appIntroScreen';
import AppiReminderScreen from '../screens/appiReminderScreen';
import AppiToGoScreen from '../screens/appiToGoScreen';
import AppiDreamScreen from '../screens/appiDreamScreen';
import HomeScreen from '../screens/homeScreen';
import OnMyMindScreen from '../screens/onMyMindScreen';
import MyProgressScreen from '../screens/myProgressScreen';
import AwardScreen from '../screens/awardScreen';

// headerStyle: {backgroundColor: '#0090FF'}, headerStyle passed through individual navigation option
// will over ride the property passed through defaultNavigation

const screens = {
  LoginScreen: {
    screen: LoginScreen,
  },
  SLoadingScreen: {
    screen: SLoadingScreen,
  },
  RegisterScreen: {
    screen: RegisterScreen,
  },
  AppIntroSlider: {
    screen: AppIntroSlider,
  },
  AppiReminderScreen: {
    screen: AppiReminderScreen,
  },
  AppiToGoScreen: {
    screen: AppiToGoScreen,
  },
  AppiDreamScreen: {
    screen: AppiDreamScreen,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  OnMyMindScreen: {
    screen: OnMyMindScreen,
  },
  MyProgressScreen: {
    screen: MyProgressScreen,
  },
  AwardScreen: {
    screen: AwardScreen,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    // headerTintColor: '#111',
    headerShown: false,
    headerStyle: {backgroundColor: '#FFF'},
  },
});

export default createAppContainer(HomeStack);
