import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import LoginGButton from '../components/roundButton';
import LoginFButton from '../components/roundButton';

export default function loginScreen({navigation}) {
  // const Onsubmit =()=>{
  //   navigation.navigate('SLoadingScreen')

  // }
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/bg_login.png')}>
      <View style={styles.firstView}>
      <StatusBar
          hidden={false}
          translucent={true}
          barStyle="light-content"
          backgroundColor="transparent"
        />
        
        <Image
          style={styles.logoImage}
          source={require('../assets/iv_app_logo.png')}
        />
        
      </View>

      <View style={styles.secondView}>
        <View style={{marginBottom: 20}}>
          <LoginGButton
            widthValue={200}
            textColorValue={'#2AA0CB'}
            borderColorValue={'#8BDDF1'}
            backgroundColorValue={'#FFF'}
            onPressValue={()=>navigation.navigate('SLoadingScreen')}
            buttonTextValue={'LOGIN WITH GMAIL'}
          />
        </View>

        <View style={{marginBottom: 100}}>
          <LoginFButton
            widthValue={200}
            textColorValue={'#FFF'}
            borderColorValue={'#FFF'}
            backgroundColorValue={'#65D1EB'}
            buttonTextValue={'LOGIN WITH FACEBOOK'}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 'auto',
  },
  firstView: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  logoImage: {
    width: 300,
    height: 130,
  },
  secondView: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },
});
