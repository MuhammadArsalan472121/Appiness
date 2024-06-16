import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import BottomNavigation from '../components/bottomNavigation';

export default function onMyMindScreen({navigation}) {
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        style={styles.container}
        source={require('../assets/bg_set_appi.png')}>
        <View
          style={{height: 700, justifyContent: 'center', alignItems: 'center'}}>
          <Text>ON MY MIND SCREEN</Text>
        </View>
        <View>
          <BottomNavigation
            TextValueM={'ON MY MIND'}
            ColorValue={'#5AC9D1'}
            ImageAT={require('../assets/ic_appitype_off.png')}
            OnPressAT={() => navigation.navigate('HomeScreen')}
            ImageOMM={require('../assets/ic_on_my_mind.png')}
            OnPressOMM={() => navigation.navigate('OnMyMindScreen')}
            ImageP={require('../assets/ic_progress_off.png')}
            OnPressP={() => navigation.navigate('MyProgressScreen')}
            ImageT={require('../assets/ic_awards_off.png')}
            OnPressT={() => navigation.navigate('AwardScreen')}
          />
        </View>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '95%',
    width: 'auto',
  },
  settingStyle: {
    height: 70,
    width: '100%',
    paddingTop: 5,
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  headerViewStyle: {
    height: 220,
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hVImageStyle: {},
  headerImageStyle: {
    height: 110,
    width: 110,
  },
  hITextViewStyle: {justifyContent: 'center'},
  headerText: {
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFF',
  },
  bottomViewStyle: {
    height: 420,
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  bottomNavigationStyle: {
    height: 70,
    width: '100%',
    borderWidth: 1,
  },
});
