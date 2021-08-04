import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Pokedex from './components/Pokedex';
import pokemonData from './assets/pokemonData.json';
import pokemonArtworks from './assets/images/pokemonArtworks.js';

// TODO Pokedex
	// TODO multiple region pokedexes, regional pokemon, multiple form pokemon

// TODO Pokemon

// TODO Locations

// TODO Moves

// TODO Items

// TODO Abilities

// TODO Team builder

// TODO Type Chart

class App extends Component {
	state = { pokemonData: pokemonData };

	render() {

		return (
			<View style={styles.background}>
				<View style={styles.content}>
					<Pokedex 
						pokemonData={this.state.pokemonData}
						pokemonArtworks={pokemonArtworks}
					/>
				</View>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		marginTop: 25,
	},
	background: {
		backgroundColor: '#222',
		fontSize: 40,
	},
});

export default App;
