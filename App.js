import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import pokemonData from './assets/pokemonData.json';
import Pokedex from './components/Pokedex';

// TODO multiple region pokedexes, regional pokemon, multiple form pokemon

class App extends Component {
	state = { pokemonData: pokemonData };

	render() {

		return (
			<View style={styles.background}>
				<View style={styles.content}>
					<Pokedex pokemonData={this.state.pokemonData}/>
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
