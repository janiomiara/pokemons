import React from 'react';
import { Container } from "./styles.js";
import { Logo, Pokebol } from "./styles";
import logo from '../../assets/img/logo.png';
import pokebol from '../../assets/img/pokebol.png';

const Welcome = () => {
	return (
		<Container>
			<Logo src={logo} alt={'pokemon'} />
			<Pokebol src={pokebol} alt={'pokebol'} />
		</Container>
	)
};

export default Welcome;
