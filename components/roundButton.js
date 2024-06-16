import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function roundButton({
  widthValue,
  onPressValue,
  buttonTextValue,
  borderColorValue,
  backgroundColorValue,
  textColorValue,
}) {
  return (
    <TouchableOpacity
      onPress={onPressValue}
      activeOpacity={0.7}
      style={[
        styles.buttonLayout,
        {
          width: widthValue,
          borderColor: borderColorValue,
          backgroundColor: backgroundColorValue,
        },
      ]}>
      <Text style={[styles.roundButtonTextStyle, {color: textColorValue}]}>
        {buttonTextValue}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonLayout: {
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButtonTextStyle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111',
  },
});
