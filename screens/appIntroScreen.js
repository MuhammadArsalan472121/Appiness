import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import App from '../App';

export default function appIntroScreen({navigation}) {
  const [showRealApp, setShowRealApp] = useState(false);
  // useEffect(() => {
  //   setShowRealApp: false

  // })

  const _renderItem = ({item}) => {
    return (
      <ImageBackground
        style={styles.bgImageStyle}
        source={require('../assets/bg_login.png')}>
        {/*phele View k tag k foran baad yeh StatusBar daalna lazmi ha*/}
        <StatusBar
          hidden={false}
          translucent={true}
          barStyle="light-content"
          // backgroundColor="#4CD8F8"
          backgroundColor="transparent"
        />
        <View style={styles.balloonStyle}>
          <Image
            source={require('../assets/sliderBalloon.png')}
            style={{height: 120, width: 80}}
          />
        </View>

        <View style={{flex: 0.5, padding: 20, justifyContent: 'flex-start'}}>
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.textStyle}>{item.text}</Text>
          {/* <Image source={item.image} /> */}
        </View>
        <View></View>
      </ImageBackground>
    );
  };
  const RenderNextButton = () => {
    return (
      <View >
        <IconMci
          name="chevron-right"
          color="#FFF"
          size={40}
          style={{backgroundColor: '#99D4FF',borderRadius:50}}
        />
      </View>
    );
  };

  const RenderDoneButton = () => {
    return (
      <View>
        <Icon
          name="checkmark-circle-outline"
          color="#FFF"
          size={40}
          style={{backgroundColor: '#99D4FF',borderRadius:50}}
        />
      </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through // navigation or simply by controlling state  // setShowRealApp(true);  
    navigation.navigate('AppiReminderScreen')
  };

  if (showRealApp) {
    return <App/>;
  } else {
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderDoneButton={RenderDoneButton}
        renderNextButton={RenderNextButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  bgImageStyle: {
    flex: 1,
    backgroundColor: '#707070',
    height: '100%',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  balloonStyle: {
    height: 150,
    width: '100%',
    // borderWidth:1,
    paddingRight: 50,
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleStyle: {
    fontSize: 40,
    color: '#FFF',
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#FFF',
    fontSize: 16,
    paddingTop: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const slides = [
  {
    key: 1,
    title: 'WELCOME TO\nAPPINESS',
    text: 'APPINESS APP WAS CREATED\nTO HELP YOU ACHIEVE A\nCLEARER PERSPECTIVE OF\nYOURSELF',
    // image: require('../assets/1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: '',
    text: 'EVERYDAY APPINESS APP WILL\nSEND YOU TWO REMINDERS ASKING\nYOU TO PICK YOUR APPI TYPE\nAND WRITE ABOUT YOUR\nAPPI STATE OF MIND.',
    // image: require('../assets/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: '',
    text: "ONCE APPINESS WILL GET TO\nKNOW YOU, YOU WILL BE ABLE\nTO VIEW YOUR DAY-TO-DAY\nANALYSED\n\nWANT TO ADD SOMETHING ELSE?\nFEEL FREE TO WRITE ANYTHING\nTHAT'S ON YOUR MIND.",
    // image: require('../assets/3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    title: '',
    text: "WANT TO SEE WHAT YOUR THOUGHTS\nWERE ON A SPECIFIC DAY?\nGO TO THE 'ON MY MIND' SECTION,\nCHOOSE A DATE AND SEE WHAT YOUR THOUGHTS WERE.",
    // image: require('../assets/3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 5,
    title: '',
    text: 'A NOTE FROM THE CREATORS:\nFOR APPINEES TO PROVIDE YOU\nWITH THE BEST ANALYSIS, BE\nCOMMITTED TO YOUR DAY-TO-DAY\nAPPI UPDATES.',
    // image: require('../assets/3.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 6,
    title: '',
    text: 'IT IS HEREBY UNDERSTOOD\nAND AGREED TO THAT YOU ATTEST\nAND CONFIRM THAT USING\nAND RELYING ON THE SERVICE\nINCLUDING ANY EVALUATION OF YOUR\nMOODS AND PERSONAL PROGRESS\nWHICH MAY BE PRODUCED AND\n EVALUATED BY YOU IS AT YOUR\nOWN RESPONSIBILITY.',
    // image: require('../assets/3.png'),
    backgroundColor: '#22bcb5',
  },
];
