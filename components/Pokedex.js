import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PokedexPokemonListing from './PokedexPokemonListing';

// TODO Game select, region select for sword-shield, x-y

class Pokedex extends Component {
constructor(props) {
		super(props);
	}

	render () {

		let game = 'firered-leafgreen';

		let pokedex = this.props.pokemonData.games[game].pokemon.map((pokemon) =>
			<PokedexPokemonListing 
				key={pokemon}
				pokemon={pokemon}
				game={game}
				pokemonData={this.props.pokemonData.pokemon[pokemon]}
				pokemonArtwork={this.props.pokemonArtworks[pokemon]}
			/>
		);

		return (
			<ScrollView style={styles.pokemonList}>
				{pokedex}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	pokemonList: {
		paddingBottom: 10,
	},
});

export default Pokedex;
