import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Field from '../components/inputField';
import RadioButton from '../components/radioButton';
import Button from '../components/roundButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const PROP = [
  {
    key: '1',
    text: 'MALE',
  },
  {
    key: '2',
    text: 'FEMALE',
  },
];

export default function registerScreen({navigation}) {
  const [stateC, setStateC] = useState({
    isVisible:false,
    dateDisplay:"11/06/1997"
  })

  /*<---Calendar Function--->*/
  const handleConfirm = date => {
    setStateC({dateDisplay: date.toString().substring(4,15)});
  };

  const onPressCancel = () => {
    setStateC({isVisible:false});
  };
  const onPressButton = () => {
    setStateC({isVisible:true});
  };

  return (
    <View style={styles.container}>
      {/*phele View k tag k foran baad yeh StatusBar daalna lazmi ha*/}
      <StatusBar
        hidden={false}
        translucent={true}
        barStyle="light-content"
        // backgroundColor="#4CD8F8"
        backgroundColor="transparent"
      />
      <ImageBackground
        style={styles.bgImageStyle}
        source={require('../assets/bg_register.png')}>
        <Text style={styles.bgTextStyle}>{"LET'S BEGIN!"}</Text>
      </ImageBackground>
      <View style={styles.secondView}>
        <View style={styles.radioViewStyle}>
          <RadioButton PROP={PROP} />
        </View>
        <View>
          <Text style={styles.filedUpperTextStyle}>Full name</Text>
          <Field widthValue={'80%'} borderColorValue={'#8BDDF1'} />

          <Text style={styles.filedUpperTextStyle}>Email</Text>

          <View style={styles.viewBody}>
            <Text style={{paddingLeft: 10, color: '#707070'}}>
              {'um6007@gmail.com'}
            </Text>
          </View>

          <Text style={styles.filedUpperTextStyle}>Birthday</Text>
          <TouchableOpacity onPress={onPressButton} style={styles.viewBody}>
            <Text
              style={{
                height: 50,
                width: '100%',
                paddingLeft: 10,
                color: '#757575',
                padding: 15,
              }}>
              {stateC.dateDisplay}
            </Text>
            <DateTimePickerModal
              isVisible={stateC.isVisible}
              onConfirm={handleConfirm}
              onCancel={onPressCancel}
              mode="date"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Button
          widthValue={200}
          textColorValue={'#111'}
          borderColorValue={'#38A2C9'}
          backgroundColorValue={'#38A2C9'}
          buttonTextValue={"OK, I'M GOOD"}
          onPressValue={() => navigation.navigate('AppIntroSlider')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  firstView: {
    flex: 0.5,
  },
  bgImageStyle: {
    flex: 0.3,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgTextStyle: {
    color: '#FFF',
    fontSize: 40,
    fontWeight: '700',
  },
  secondView: {
    flex: 0.5,
    justifyContent: 'space-around',
  },
  radioViewStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  filedUpperTextStyle: {paddingLeft: 40, color: '#6487A1', marginTop: 5},
  viewBody: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingLeft: 10,
    padding: 5,
    height: 60,
    width: '80%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#8BDDF1',
  },
  buttonView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
