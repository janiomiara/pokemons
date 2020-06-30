import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Titulo, WrapperImg, WrapperTitulo } from "./styles";
import {UpdatePokemon} from "./redux/pokemonsRedux";
import {useDispatch} from "react-redux";


const Card = ({ dados}) => {
	const { image, name, id} = dados
	
	const history = useHistory();
	const dispatch = useDispatch();
	
	const infoPokemon = () => {
		dispatch(UpdatePokemon(dados))
		history.push(`/pokemon/${id}`);
	};
	
	return (
		<Container onClick={() => infoPokemon()}>
			<WrapperImg>
				<img src={image} alt={image} />
			</WrapperImg>
			<WrapperTitulo>
				<Titulo>
					{name}
				</Titulo>
			</WrapperTitulo>
		</Container>
	);
};

export default Card;
