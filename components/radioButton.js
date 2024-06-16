import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const {PROP} = this.props;
    const {value} = this.state;

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width:'100%',
        }}>
        {PROP.map(res => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}>
                {value === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
              <Text style={styles.radioText}>{res.text}</Text>
            </View>
          );
        })}
        {/* <Text> Selected: {this.state.value} </Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  radioCircle: {
    width: 21,
    height: 21,
    marginRight: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8BDDF1',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 12,
    height: 11,
    borderRadius: 100,
    backgroundColor: '#8BDDF1',
  },
});
