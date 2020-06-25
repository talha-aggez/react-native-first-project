/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//flex 1 değeri sayesinde alamadığımız elemanları almış oluruz...
import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Liste from './src/components/Liste';
const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <Header headerText={'OrnekProje'} />
        <Liste />
      </View>
    </>
  );
};

export default App;
