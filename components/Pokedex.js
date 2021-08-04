import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PokedexPokemonListing from './PokedexPokemonListing';

// TODO Game select, region select for sword-shield, x-y
// TODO regional pokemon for sword-shield, x-y, sun-moon, ultra-sun-ultra-moon
// TODO multiple form pokemon

class Pokedex extends Component {
constructor(props) {
		super(props);

		this.state = {
			game: 'firered-leafgreen',// this will default to national
		}
	}

	render () {

		let pokemonList = this.props.pokemonData.games[this.state.game].pokemon.map((pokemon) =>
			<PokedexPokemonListing 
				key={pokemon}
				pokemon={pokemon}
				game={this.state.game}
				pokemonData={this.props.pokemonData.pokemon[pokemon]}
				pokemonArtwork={this.props.pokemonArtworks[pokemon]}
			/>
		);

		return (
			<View>
				<View style={{
					margin: 10,
					justifyContent: 'space-between',
				}}>
					<View style={{
						borderWidth: 1,
						borderRadius: 10,
						borderColor: '#fff',
						alignItems: 'center',
						justifyContent: 'center',
						height: 30,
						width: 165,
					}}>
						<Text style={{
							color: '#fff',
							fontSize: 20,
						}}>{this.state.game}</Text>
					</View>
				</View>
				<ScrollView style={{
					height: 645,
				}} contentContainerStyle={{
					paddingBottom: 10,
				}}>
					{pokemonList}
				</ScrollView>
			</View>
		);
	}
}

export default Pokedex;
