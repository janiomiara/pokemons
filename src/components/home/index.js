import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useLazyQuery, useQuery} from "@apollo/react-hooks";

import Cards from '../cards';
import NavSearch from '../search';
import {Container} from './styles';
import {getPokemons} from '../cards/redux/pokemonsRedux';
import {GET_POKEMON, GET_POKEMONS} from '../../graphql/getPokemons';

const Home = () => {
	const dispatch = useDispatch();
	const [valueNav, setValueNav] = useState('');
	const [getPokemon, {loading, data: {pokemon = false} = {}}] = useLazyQuery(GET_POKEMON);
	
	const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
		variables: {first: 15},
		notifyOnNetworkStatusChange: true
	});
	
	const handleChange = (value) => {
		setValueNav(value);
		if (!value) {
			dispatch(getPokemons(pokemons));
		} else {
			setTimeout(() => {
				getPokemon({variables: {name: value}})
			}, 500)
		}
	}
	
	const searchPekemon = () => {
		getPokemon({variables: {name: valueNav}})
	}
	
	return (
		<Container>
			<NavSearch
				handleChange={(e) => handleChange(e.target.value)}
				searchPekemon={() => searchPekemon()}
				valueNav={valueNav}
				pokemon={pokemon}
				loading={loading}/>
			<Cards status={loading}/>
		</Container>
	);
};

export default Home;
