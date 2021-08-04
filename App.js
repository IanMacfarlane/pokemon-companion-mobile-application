import React, { Component } from 'react';
import { View } from 'react-native';
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

// TODO may need to adjust styling to fit different sized screens
// my screen is 360x700

class App extends Component {
	state = { pokemonData: pokemonData };

	render() {

		return (
			<View style={{
				backgroundColor: '#222',
			}}>
				<View style={{
					marginTop: 25,
				}}>
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

export default App;
