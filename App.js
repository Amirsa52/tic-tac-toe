/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Xbutton from './component/Xbutton';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
let arr2 = ['', '', '', '', '', '', '', '', ''];
let checkVal = false;
const prevArr = '';
const App = () => {
  let arr = [
    '2-4 f: cfkmf',
    '5-11 t: glhbttzvzttkdx',
    '9-12 m: mmmmmmmmmmmmm',
    '11-14 k: kkkkkkkkkkkkkkk',
  ];
  //let arr2 = ['', '', '', '', '', '', '', '', ''];
  const [arr3, setArr] = useState(['', '', '', '', '', '', '', '', '']);
  const [valueX, setX] = useState('O');
  const [valueO, setO] = useState('');
  const [counter, setCounter] = useState(0);
  let val = '';
  let x = 1;
  const ref = useRef();
  const valCheck = i => {
    console.log('aa gya function me');
    //console.log('check', checkVal);
    if (checkVal == false) {
      setX('X');
      arr2[i] = valueX;
      setArr(arr2);
      console.log(arr2);
      console.log(arr3);
      checkVal = true;
      // checkVal = true;
      //console.log('check1', checkVal);
    } else {
      setX('O');
      arr2[i] = valueX;
      setArr(arr2);
      console.log(arr2);
      console.log(arr3);
      checkVal = false;
    }
  };
  const winGame = () => {
    if (arr2[0] !== '' && arr2[0] == arr2[3] && arr2[3] == arr2[6]) {
      return arr2[0];
    } else if (arr2[0] !== '' && arr2[0] == arr2[1] && arr2[1] == arr2[2]) {
      return arr2[0];
    } else if (arr2[0] !== '' && arr2[0] == arr2[4] && arr2[4] == arr2[8]) {
      return arr2[0];
    } else if (arr2[1] !== '' && arr2[1] == arr2[4] && arr2[4] == arr2[7]) {
      return arr2[1];
    } else if (arr2[3] !== '' && arr2[3] == arr2[4] && arr2[4] == arr2[5]) {
      return arr2[3];
    } else if (arr2[6] !== '' && arr2[6] == arr2[7] && arr2[7] == arr2[8]) {
      return arr2[6];
    } else if (arr2[6] !== '' && arr2[6] == arr2[4] && arr2[4] == arr2[2]) {
      return arr2[6];
    } else if (arr2[2] !== '' && arr2[2] == arr2[5] && arr2[5] == arr2[8]) {
      return arr2[2];
    } else {
      return '';
    }
  };
  // useEffect(() => {
  //   prevArr = usePrevious(arr3);
  // }, []);
  const usePrevious = value => {
    console.log('yaha');

    console.log('aa gya');
    ref.current = value;
    console.log('prev', ref.current);
  };
  return (
    <View>
      <TouchableOpacity
        style={{top: '40%', alignItems: 'center'}}
        onPress={() => {
          //usePrevious(arr3);
          <Button
            style={{top: '45', alignItems: 'center'}}
            title="okay"></Button>;
        }}>
        <Text>reset</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          top: '50%',
        }}>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            style={styles.pressAble}
            onPress={() => {
              valCheck(0);
            }}>
            <Text> {arr3[0]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pressAble}
            onPress={() => {
              valCheck(3);
            }}>
            <Text> {arr3[3]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              color: 'black',
              borderRightWidth: 2,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              valCheck(6);
            }}>
            <Text> {arr3[6]} </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            style={styles.pressAble}
            onPress={() => {
              valCheck(1);
            }}>
            <Text> {arr3[1]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.pressAble}
            onPress={() => {
              valCheck(4);
            }}>
            <Text> {arr3[4]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              color: 'black',
              borderRightWidth: 2,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              valCheck(7);
            }}>
            <Text> {arr3[7]} </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            style={{
              color: 'black',
              borderBottomWidth: 2,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              valCheck(2);
            }}>
            <Text> {arr3[2]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              color: 'black',
              borderBottomWidth: 2,
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              valCheck(5);
            }}>
            <Text> {arr3[5]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              color: 'black',
              height: 60,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              valCheck(8);
            }}>
            <Text> {arr3[8]} </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{top: '150%', alignItems: 'center'}}>
        {winGame() != '' ? (
          <Text style={{fontSize: 35, color: 'blue'}}>
            {winGame()} is winner{' '}
          </Text>
        ) : null}
      </View>
    </View>
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

export default App;
