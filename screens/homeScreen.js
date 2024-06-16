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

export default function HomeScreen({navigation}) {
  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        style={styles.container}
        source={require('../assets/bg_set_appi.png')}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          activeOpacity={0.6}
          style={styles.settingStyle}>
          <IconMi name="settings" size={40} color={'#FFF'} />
        </TouchableOpacity>

        <View style={styles.headerViewStyle}>
          <View style={styles.hVImageStyle}>
            <Image
              source={require('../assets/HS_smiley.png')}
              style={styles.headerImageStyle}
            />
          </View>

          <Text style={[styles.headerText, {fontSize: 20, padding: 10}]}>
            {'Hello'}
          </Text>
          <Text style={styles.headerText}>{'HOW APPI ARE YOU TODAY?'}</Text>
        </View>

        <View style={styles.bottomViewStyle}>
          <View style={{padding: 50, }}>
            <Text>Slider</Text>
          </View>
          <View
            style={{ borderColor: '#6487A1', borderRadius: 20}}>
            <TextInput
              placeholder={"WHAT'S ON YOUR MIND?"}
              placeholderTextColor={'#6487A1'}
              multiline={true}
              height={200}
              width={270}
              maxLength={120}
              numberOfLines={10}
              backgroundColor={'#fff'}
              style={{
                justifyContent: 'flex-start',
                textAlignVertical: 'top',
                padding: 10,
                color: '#6487A1',
                fontSize: 18,
                borderRadius: 20,
              }}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              // backgroundColor: '#C3FFFF',
              marginTop: 10,
              borderRadius: 50,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconMci
              name={'checkbox-marked-circle'}
              size={70}
              color={'#8BDDF1'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <BottomNavigation
            TextValueA={'APPI TYPE'}
            ColorValue={'#F88CA1'}
            ImageAT={require('../assets/ic_appitype_on.png')}
            OnPressAT={() => navigation.navigate('HomeScreen')}
            ImageOMM={require('../assets/ic_on_my_mind_off.png')}
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
    height: 80,
    width: '100%',
    paddingLeft: 20,
    paddingTop: 20,
    alignItems: 'flex-start',
  },
  headerViewStyle: {
    height: 220,
    width: '100%',
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
  },
  bottomNavigationStyle: {
    height: 70,
    width: '100%',
  },
});
