import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconMci from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function bottomNavigation({
  navigation,
  ColorValue,
  TextValueA,
  TextValueM,
  TextValueP,
  TextValueT,
  ImageAT,
  ImageOMM,
  ImageP,
  ImageT,
  OnPressAT,
  OnPressOMM,
  OnPressP,
  OnPressT,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height: 70,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 0,
        elevation: 2,
      }}>
      <TouchableOpacity
        activeOpacity={0}
        onPress={OnPressAT}
        style={{flex: 0.25, alignItems: 'center'}}>
        <Image
          source={ImageAT}
          style={{height: 30, width: 30}}
        />
        <Text style={{color:ColorValue, fontSize: 10}}>{TextValueA}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0}
        onPress={OnPressOMM}
        style={{flex: 0.25, alignItems: 'center'}}>
        <Image
          source={ImageOMM}
          style={{height: 30, width: 22}}
        />
        <Text style={{color:ColorValue, fontSize: 10}}>{TextValueM}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0}
        onPress={OnPressP}
        style={{flex: 0.25, alignItems: 'center'}}>
        <Image
          source={ImageP}
          style={{height: 30, width: 30}}
        />
        <Text style={{color:ColorValue, fontSize: 10}}>{TextValueP}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0}
        onPress={OnPressT}
        style={{flex: 0.25, alignItems: 'center'}}>
        <Image
          source={ImageT}
          style={{height: 30, width: 30}}
        />
        <Text style={{color:ColorValue, fontSize: 10}}>{TextValueT}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTextStyle: {
    fontSize: 10,
    color: '#707070',
  },
});
