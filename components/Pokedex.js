import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import PokedexPokemonListing from './PokedexPokemonListing';
import { OptimizedFlatList } from 'react-native-optimized-flatlist';

// TODO Game select, region select for sword-shield, x-y
// TODO regional pokemon for sword-shield, x-y, sun-moon, ultra-sun-ultra-moon
// TODO multiple form pokemon

class Pokedex extends Component {
constructor(props) {
		super(props);

		this.state = {
			game: 'national',// this will default to national
		}
	}

	render () {

		/*let pokemonList = this.props.pokemonData.games[this.state.game].pokemon.map((pokemon) =>
			<PokedexPokemonListing 
				key={pokemon}
				pokemon={pokemon}
				game={this.state.game}
				pokemonData={this.props.pokemonData.pokemon[pokemon]}
				pokemonArtwork={this.props.pokemonArtworks[pokemon]}
			/>
		);*/

		let pokemon;
		let pokemonList = [];
		for (pokemon in this.props.pokemonData.pokemon) {
			pokemonList.push(pokemon);
		}

		let renderItem = ({ item }) => (
			<PokedexPokemonListing 
				key={item}
				pokemon={item}
				game={this.state.game}
				pokemonData={this.props.pokemonData.pokemon[item]}
				pokemonArtwork={this.props.pokemonArtworks[item]}
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
				<FlatList 
					data={pokemonList}
					renderItem={renderItem}
					keyExtractor={item => item}
					style={{height: 645}}
					contentContainerStyle={{paddingBottom: 10}}
					updateCellsBatchingPeriod={10}
					maxToRenderPerBatch={50}
					initialNumToRender={50}
					windowSize={50}
				/>
			</View>
		);
	}
}

export default Pokedex;
