import React, {useEffect} from 'react';
import {Search} from 'react-feather';
import {useDispatch} from 'react-redux';
import {Logo} from './styles';
import logo from '../../assets/img/logo.png';
import {Container, WrapperInput} from './styles';
import {getPokemons} from '../cards/redux/pokemonsRedux';

const NavSearch = ({handleChange, searchPekemon, pokemon, valueNav}) => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (pokemon){
			dispatch(getPokemons([pokemon]));
		}
		if (pokemon === false){
			dispatch(getPokemons(false));
		}
	},[pokemon])
	
	return (
		<Container>
			<Logo src={logo} alt={'pokemon'}/>
			<WrapperInput>
					<input type="text" placeholder={'Search'} value={valueNav} onChange={handleChange} />
					<span onClick={searchPekemon}><Search/></span>
			</WrapperInput>
		</Container>
	);
};

export default NavSearch;
