import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

export default function signinLoadingScreen({navigation}) {
  // const [timeout, setTimeout] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    // setTimeout(() => {
      navigation.navigate('RegisterScreen');
    // },1000);
  });
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/bg_login.png')}>
      {/*phele View k tag k foran baad yeh StatusBar daalna lazmi ha*/}
      <StatusBar
        hidden={false}
        translucent={true}
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <View style={styles.firstView}>
        <Image
          style={styles.logoImage}
          source={require('../assets/iv_app_logo.png')}
        />
      </View>
      <View style={styles.secondView}>
        <ActivityIndicator color={'#FFF'} size={'large'} />

        {/* <Image source={require('./assets/loader.gif')}/> */}

        <Text style={styles.viewText}>{'Welcome to your Appiness'}</Text>
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
    // justifyContent: 'flex-end',
  },
  viewText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
