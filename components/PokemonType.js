import React, { Component } from 'react';
import { Text, View } from 'react-native';

// TODO virtical orientation for type chart

class PokemonType extends Component {

	constructor(props) {
		super(props);

		this.state = {
			color: null,
		}

		switch(this.props.type) {
			case 'normal':
				this.state.color = 'rgb(77,83,86)';
				break;
			case 'fire':
				this.state.color = 'rgb(184,28,0)';
				break;
			case 'water':
				this.state.color = 'rgb(0,87,173)';
				break;
			case 'electric':
				this.state.color = 'rgb(173,130,0)';
				break;
			case 'grass':
				this.state.color = 'rgb(88,141,42)';
				break;
			case 'ice':
				this.state.color = 'rgb(0,95,143)';
				break;
			case 'fighting':
				this.state.color = 'rgb(150,68,54)';
				break;
			case 'poison':
				this.state.color = 'rgb(138,68,132)';
				break;
			case 'ground':
				this.state.color = 'rgb(145,116,29)';
				break;
			case 'flying':
				this.state.color = 'rgb(0,17,122)';
				break;
			case 'psychic':
				this.state.color = 'rgb(153,0,61)';
				break;
			case 'bug':
				this.state.color = 'rgb(136,150,27)';
				break;
			case 'rock':
				this.state.color = 'rgb(127,113,56)';
				break;
			case 'ghost':
				this.state.color = 'rgb(56,56,127)';
				break;
			case 'dragon':
				this.state.color = 'rgb(31,15,138)';
				break;
			case 'dark':
				this.state.color = 'rgb(95,68,54)';
				break;
			case 'steel':
				this.state.color = 'rgb(67,73,76)';
				break;
			case 'fairy':
				this.state.color = 'rgb(105,17,105)';
				break;
		}
	}

	render () {
		return(
			<View style={{
				backgroundColor: this.state.color,
				borderRadius: 10,
				alignItems: 'center',
				justifyContent: 'center',
				width: 110,
				height: 30,
			}}>
				<Text style={{
					color: '#fff',
					fontSize: 20,
				}}>{this.props.type.toUpperCase()}</Text>
			</View>
		);
	}
}

export default PokemonType;
