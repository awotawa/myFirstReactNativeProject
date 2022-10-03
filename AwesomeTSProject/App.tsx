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
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

interface PokemonData {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
  detailUrl: string;
  imageUrl: string;
}

const extractPokemonOrder = (url: string) => {
  // Other regex possible https://regex101.com/r/hm09P8/1
  const regex = /(?<=\/v2\/pokemon\/)\d+(?=\/$)/;
  const arrMatch = url.match(regex);
  if (!arrMatch) {
    return 132;
  }
  return arrMatch[0];
};

const adaptPokemon = (pokemonData: PokemonData[]): Pokemon[] => {
  return pokemonData.map(data => {
    const id = extractPokemonOrder(data.url);
    return {
      name: data.name,
      detailUrl: data.url,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    };
  });
};

const Pokemons = adaptPokemon(require('./pokemons.json'));

interface PokemonDetailProps {
  item: Pokemon;
}

const App = () => {
  const renderItem = ({ item }: PokemonDetailProps) => (
    <PokemonDetail item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Pokemons}
        renderItem={renderItem}
        keyExtractor={item => item.detailUrl}
      />
    </SafeAreaView>
  );
};

const PokemonDetail = ({ item }: PokemonDetailProps) => (
  <View style={styles.listContainer}>
    <View style={styles.card}>
      <Image
        style={styles.officialImg}
        source={{
          uri: item.imageUrl,
        }}
      />
      <Text style={styles.name}>{capitalizeFirstLetter(item.name)}</Text>
    </View>
  </View>
);

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 200,
    borderColor: '#20232a',
    borderRadius: 6,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
