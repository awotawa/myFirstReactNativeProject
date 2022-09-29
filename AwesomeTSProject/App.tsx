/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.title}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 200,
    height: 200,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#FF0000', //red
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00FF00', //green
    textAlign: 'center',
  },
});

export default App;
