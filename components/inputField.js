import React from 'react';

import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function inputField({
  placeHolderValue,
  widthValue,
  borderColorValue,
}) {
  return (
    <View
      style={[
        styles.viewBody,
        {
          width: widthValue,
          borderWidth: 2,
          borderColor: borderColorValue,
          backgroundColor: '#FFF',
        },
      ]}>
      <TextInput
        placeholder={placeHolderValue}
        placeholderTextColor={'#999'}
        style={styles.textInputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    padding: 5,
    height: 60,
    width: '80%',
  },
  textInputStyle: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#111',
    width: '100%',
  },
});
