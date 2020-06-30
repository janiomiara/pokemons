import React, {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {ArrowLeftCircle, Bookmark, Edit, Zap} from 'react-feather';

import Modal from './modal/modal';
import {GET_POKEMON_ID} from '../../graphql/getPokemons';
import {UpdatePokemon} from "../cards/redux/pokemonsRedux";
import {BodyCard, BodyPokemon, Container, Hearder, HearderCard, Imagen, ProgrsCard} from './styles';


const Pokemon = () => {
	const [statePokemon, setPokemon] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();
	const {id} = useParams();
	const history = useHistory();
	
	const {image, name, types, attacks} = statePokemon
	const {pokemon: reduxPokemon} = useSelector(state => state.pokemons);
	
	const [getPokemon, {loading, data: {pokemon = false} = {}}] = useLazyQuery(GET_POKEMON_ID);
	
	useEffect(() => {
		if (reduxPokemon) {
			setPokemon(reduxPokemon)
		} else {
			getPokemon({variables: {id: id}})
			setPokemon(pokemon)
		}
	}, [pokemon, reduxPokemon])
	
	const infoPokemon = () => {
		dispatch(UpdatePokemon(statePokemon))
		history.push(`/`);
	};
	
	const handleModal = () => {
		setShowModal(!showModal)
	}
	
	const onChangeName = ({target: {value}}) => {
		let newPokemon = {...statePokemon, name: value}
		setPokemon(newPokemon)
	}
	
	const onChangeType = ({target: {value, name},}) => {
		const {types} = statePokemon
		
		const newTypes = types.map((types) => {
			if (types === name) return value
			return types
		})
		const updatePokemon = {...statePokemon, types: newTypes}
		setPokemon(updatePokemon)
	};
	
	const onChangeSpecial = ({target: {value, name},}) => {
		const {attacks: {special}} = statePokemon
		
		const newSpecial = special.map((special) => {
			if (special.name === name) {
				return special.name = value
			}
			return special
		})
		const updatePokemon = {...statePokemon, special: newSpecial}
		setPokemon(updatePokemon)
	};
	
	return (
		<Container>
			{
				!loading && statePokemon &&
				<>
					<button onClick={() => setShowModal(!showModal)} className="actions" id="edit">
						<Edit/>
					</button>
					<button onClick={() => infoPokemon()} className="actions" id="back-home">
						<ArrowLeftCircle/>
					</button>
					
					<Hearder>
						<Imagen>
							<img src={image} alt={''}/>
							<div className={'titulo'}>{name}</div>
						</Imagen>
					</Hearder>
					<BodyPokemon>
						<ProgrsCard>
							<HearderCard>
								<Bookmark/>
								<div>TIPO</div>
							</HearderCard>
							<BodyCard>
								{types.map(types => <div className={'title'}>{types}</div>)}
							</BodyCard>
						</ProgrsCard>
						
						<ProgrsCard>
							<HearderCard>
								<Zap/>
								<div>Attacks</div>
							</HearderCard>
							<BodyCard>
								{attacks.special.map(special => <div className={'title'}>{special.name}</div>)}
							</BodyCard>
						</ProgrsCard>
					</BodyPokemon>
					<Modal
						onChangeSpecial={(e) => onChangeSpecial(e)}
						onChangeName={(e) => onChangeName(e)}
						onChangeType={(e) => onChangeType(e)}
						showModal={showModal}
						handleModal={handleModal}
						dataPokemon={statePokemon}
					/>
				</>}
		</Container>
	);
};

export default Pokemon;
