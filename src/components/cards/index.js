import React, { useEffect} from 'react';
import { useQuery } from '@apollo/react-hooks';
import {useDispatch, useSelector} from "react-redux";

import Card from './card';
import { ContainerCard } from './styles';
import SpinnerBall from './SpinnerBall';
import {getPokemons} from "./redux/pokemonsRedux";
import {GET_POKEMONS} from '../../graphql/getPokemons';

const Cards = ({status}) => {
	const dispatch = useDispatch();
	const { data: listaPokemons, messages} = useSelector(state => state.pokemons);
	
	const { loading, fetchMore, data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
		variables: { first: 15 },
		notifyOnNetworkStatusChange: true
	});
	
	useEffect(() => {
		 dispatch(getPokemons(pokemons));
	},[pokemons.length])
	
	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		}
	})
	
	const fetchMorePokemon = () => {
		if (pokemons.length === 150) return;
		fetchMore({
			variables: { first: pokemons.length + 15 },
			updateQuery: (prev, { fetchMoreResult, ...rest }) => {
				if (!fetchMoreResult) return prev;
				return { pokemons: fetchMoreResult.pokemons }
			}
		})
	}

	const handleScroll = () => {
		if (document.scrollingElement.scrollTop + window.innerHeight >=
			document.scrollingElement.scrollHeight) fetchMorePokemon();
	}
	
	return (
		<ContainerCard>
		
			{! messages || loading?
				listaPokemons.map(pokemon => <Card dados={pokemon} key={pokemon.id} />)
					: !status && <h4>Pokemon não localizado</h4>
			}
			<SpinnerBall active={loading || status} />
		</ContainerCard>
	);
};

export default Cards;
