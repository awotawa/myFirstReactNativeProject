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
const extractPokemonOrder = (url: string) => {
  // Other regex possible https://regex101.com/r/hm09P8/1
  const regex = /(?<=\/v2\/pokemon\/)\d+(?=\/$)/;
  const arrMatch = url.match(regex);
  if (!arrMatch) {
    return 132;
  }
  return arrMatch[0];
};

const Pokemons = require('./pokemons.json');

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.title}>Hello</Text>
      </View>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.square}>
  //       <Text style={styles.title}>Hello</Text>
  //     </View>
  //   </View>
  // );
};

const ListComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.officialImg}
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png',
          }}
        />
        <Text style={styles.name}>Fletchinder</Text>
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
  card: {
    width: 300,
    height: 200,
    borderColor: '#20232a',
    borderRadius: 6,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  officialImg: {
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
