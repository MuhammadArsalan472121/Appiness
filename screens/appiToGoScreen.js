import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Button from '../components/roundButton';
import {useGlobalContext} from '../context/contextFile';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function appiToGoScreen({navigation}) {
  const {stateT, setStateT} = useGlobalContext({});
  
  /*<---Time Functions--->*/
  const handleConfirm = time => {
    setStateT({TimeDisplay: time.toString()});
  };

  const onPressCancel = () => {
    setStateT({visibility: false});
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../assets/bg_alarm_day.png')}>
        <View>
          <Text style={styles.headerText}>{'APPI TO GO'}</Text>
          <Text style={[styles.headerText, {fontSize: 14}]}>
            {"SET YOUR 'START OF THE DAY' REMINDER"}
          </Text>
        </View>
        <Text style={[styles.headerText, {padding: 20, fontSize: 30}]}>
          {stateT.TimeDisplay.substring(16, 21)}
        </Text>
      </ImageBackground>
      <View style={styles.bottomView}>
        {/* <TouchableOpacity
        // onPress={()=>{setStateT(true)}}
        activeOpacity={0.6}
          style={{
            backgroundColor: 'skyblue',
            marginBottom: 50,
            borderRadius: 50,
            width: 100,
            height: 50,
            justifyContent:'center',
            alignItems:'center',
          }}>
            <Text>Set Time</Text>
          </TouchableOpacity> */}
        <DateTimePickerModal
          is24Hour={true}
          isVisible={stateT.visibility}
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
