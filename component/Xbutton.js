import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Xbutton = props => {
  return (
    <TouchableOpacity style={styles.pressAble} onPress={props.onPress}>
      <Text>{props.inputText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  pressAble: {
    color: 'black',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Xbutton;
