import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PokemonType from './PokemonType';

// TODO regional pokedex, number, types, artwork
// TODO text color
// TODO on click open pokemon
// TODO caught indicator

class PokedexPokemonListing extends Component {

	constructor(props) {
		super(props);

		// no fairy types gen 1-5
		let types = this.props.pokemonData.type;
		if (this.props.game === 'red-blue-yellow' || 
			this.props.game === 'gold-silver-crystal' || 
			this.props.game === 'ruby-sapphire-emerald' || 
			this.props.game === 'firered-leafgreen' || 
			this.props.game === 'diamond-pearl' || 
			this.props.game === 'platinum' || 
			this.props.game === 'heartgold-soulsilver' || 
			this.props.game === 'black-white' || 
			this.props.game === 'black 2-white 2') 
		{
			if (types.indexOf('fairy') != -1) {
				types.splice(types.indexOf('fairy'), 1);
				if (types.length === 0) {
					types.push('normal');
				}
			}
		}

		this.state = {
			types: types,
		}
	}

	render () {

		let pokemonTypes = this.state.types.map((type) =>
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
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}>
				<View>
					<View style={{
						flexDirection: 'row',
						height: 30,
						alignItems: 'center',
					}}>
						<Text style={{
							color: '#fff',
							marginRight: 10,
							fontSize: 20,
						}}>{'#' + this.props.pokemonData.number[this.props.game]}</Text>
						<Text style={{
							color: '#fff',
							fontSize: 20,
						}}>{this.props.pokemon.charAt(0).toUpperCase() + this.props.pokemon.slice(1)}</Text>
					</View>
					<View style={{
						width: 230,
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 10,
					}}>
						{pokemonTypes}
					</View>
				</View>
				<Image source={this.props.pokemonArtwork} style={{
					height: 70,
					width: 70,
				}}/>
			</View>
		);
	}
}

export default PokedexPokemonListing;
