import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import pokemonData from './assets/pokemonData.json';

class App extends Component {
	state = { pokemonData: pokemonData };

	render() {

		// TODO user input to switch between games
		let pokemonList = [];
		this.state.pokemonData.games['firered-leafgreen'].pokemon.forEach(function(pokemon) {
			pokemonList.push(
				<View style={styles.pokemonListing}>
					<Text style={styles.text}>{pokemon}</Text>
				</View>
			);
		}.bind(this));

		return (
			<View style={styles.background}>
				<View style={styles.content}>
					<ScrollView style={styles.pokemonList}>
						{pokemonList}
					</ScrollView>
				</View>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pokemonList: {
		width: '100%',
	},
	pokemonListing: {
		width: '100%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},
	content: {
		marginTop: 25,
	},
	background: {
		backgroundColor: '#222',
	},
});

export default App;
