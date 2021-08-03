import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PokemonType from './PokemonType';

class PokedexPokemonListing extends Component {

	constructor(props) {
		super(props);
	}

	render () {

		// TODO regional pokedex number and data formatting for some games
		// TODO pokemon image
		// TODO text color
		// TODO format ui
		// TODO on click open pokemon data view

		let pokemonTypes = this.props.pokemonData.type.map((type) =>
			<PokemonType key={type} type={type}/>
		);

		return (
			<View style={{
				borderColor: '#fff',
				borderWidth: 1,
				borderRadius: 10,
				marginLeft: 10,
				marginRight: 10,
				marginTop: 10,
				padding: 10,
			}}>
				<View style={{
					flexDirection: 'row',
				}}>
					<Text style={{color: '#fff', marginRight: 10}}>{'#' + this.props.pokemonData.number[this.props.game]}</Text>
					<Text style={{color: '#fff'}}>{this.props.pokemon.charAt(0).toUpperCase() + this.props.pokemon.slice(1)}</Text>
				</View>
				<View style={{
					width: 170,
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginTop: 10,
				}}>
				{pokemonTypes}
				</View>
			</View>
		);
	}
}

export default PokedexPokemonListing;
