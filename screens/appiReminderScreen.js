import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useGlobalContext } from '../context/contextFile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function appiReminderScreen({navigation}) {
  const {stateT,stateTN} = useGlobalContext()
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/bg_set_appi.png')}>
      <TouchableOpacity
        onPress={() =>
          // setTimeout(() => {
            navigation.navigate('HomeScreen')
          // }, 2000)
        }
        activeOpacity={0.6}
        style={styles.chevronStyle}>
        <Icon name="chevron-right" size={70} color={'#FFF'} />
      </TouchableOpacity>

      <View style={styles.hTextViewStyle}>
        <Text style={styles.headerText}>{'SET YOUR APPI\nREMINDERS'}</Text>
      </View>

      <View style={styles.imagesViewStyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AppiToGoScreen')}
          activeOpacity={1}
          style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/ic_alarm_day.png')}
            style={styles.imageStyling}
          />

          <Text style={styles.timeTextStyle}>{stateT.TimeDisplay.substring(16,21)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('AppiDreamScreen')}
          activeOpacity={1}
          style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/ic_alarm_night.png')}
            style={styles.imageStyling}
          />

          <Text style={styles.timeTextStyle}>{stateTN.TimeDisplay.substring(16,21)}</Text>
        </TouchableOpacity>
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
  chevronStyle: {
    flex: 0.1,
    width: '100%',
    alignItems: 'flex-end',
  },
  hTextViewStyle: {
    flex: 0.4,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFF',
  },
  imagesViewStyle: {
    flex: 0.5,
    flexDirection: 'row',
    width: '60%',
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  imageStyling: {
    height: 80,
    width: 80,
  },
  timeTextStyle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
  },
});
