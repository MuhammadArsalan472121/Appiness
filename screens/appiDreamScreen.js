import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Button from '../components/roundButton';
import { useGlobalContext } from '../context/contextFile';

export default function appiDreamScreen({navigation}) {
  const {stateTN,setStateTN} = useGlobalContext({})

  /*<---Time Functions--->*/
  const handleConfirm = time => {
    setStateTN({TimeDisplay: time.toString()});
  };

  const onPressCancel = () => {
    setStateTN({visibility: false});
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../assets/bg_alarm_night.png')}>
        <View>
          <Text style={styles.headerText}>{'APPI DREAMS'}</Text>
          <Text style={[styles.headerText, {fontSize: 14}]}>
            {"SET YOUR 'END OF THE DAY' REMINDER"}
          </Text>
        </View>
        <Text style={[styles.headerText, {padding: 20, fontSize: 30}]}>
          {stateTN.TimeDisplay.substring(16,21)}
        </Text>
      </ImageBackground>
      <View style={styles.bottomView}>
        <DateTimePickerModal
          is24Hour={true}
          isVisible={stateTN.visibility}
          onConfirm={handleConfirm}
          onCancel={onPressCancel}
          mode="time"
        />
        <View style={styles.buttonStyle}>
          <Button
            widthValue={'100%'}
            textColorValue={'#FFF'}
            borderColorValue={'#3CBFE3'}
            buttonTextValue={"I'M ALL SET"}
            backgroundColorValue={'#3CBFE3'}
            // onPressValue={() => navigation.goBack(null)}
            onPressValue={() => navigation.navigate('AppiReminderScreen')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: '500',
    textAlign: 'center',
  },
  bottomView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    width: '50%',
    marginBottom: 50,
  },
});
