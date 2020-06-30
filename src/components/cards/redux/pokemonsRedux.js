const INITIAL_STATE = {
	data: [],
	pokemon: false,
	isLoading: false,
	isSuccess: false,
	messages: false,
	error: ''
};

const Types = {
	FETCH_POKEMONS: "FETCH_POKEMONS",
	FETCH_POKEMONS_SUCCESS: "FETCH_POKEMONS_SUCCESS",
	FETCH__POKEMONS_FAILURE: "FETCH_POKEMONS_FAILURE",
	UPADET_POKEMON: "UPADET_POKEMON",
};

const initFetch = () => {
	return { type: Types.FETCH_POKEMONS};
};

const fetchSuccess = pokemons => {
	return {
		type: Types.FETCH_POKEMONS_SUCCESS,
		pokemons
	};
};

const fetchFailure = message => {
	return {
		type: Types.FETCH__POKEMONS_FAILURE,
		message
	};
};

const updatePokemon = pokemon => {
	return {
		type: Types.UPADET_POKEMON,
		pokemon
	};
};

const pokemonsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.FETCH_POKEMONS: {
			return { ...state , data: [], isLoading: true, messages: "",  error: "",};
		}
		case Types.FETCH_POKEMONS_SUCCESS: {
			const pokemons = action.pokemons
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				data: pokemons && pokemons.map((pok) => {
					if (pok.id === state.pokemon.id)
						return state.pokemon
					return pok
				}),
				error: ""
			};
		}
		case Types.FETCH__POKEMONS_FAILURE: {
			return {
				...state,
				isLoading: false,
				isSuccess: false,
				data: [],
				messages: 'não foi possivel localizar pokemon',
			};
		}
		
		case Types.UPADET_POKEMON: {
			
			return {
				...state,
				isLoading: false,
				isSuccess: true,
				pokemon:  action.pokemon
			};
		}
		default:
			return state;
	}
};


export const UpdatePokemon = (pokemon) => {
	return function(dispatch) {
		dispatch(updatePokemon(pokemon));
	};
};

export const getPokemons = (pokemons) => {
	return function(dispatch) {
		dispatch(initFetch());
		if (!pokemons) dispatch(fetchFailure());
		dispatch(fetchSuccess(pokemons));
	};
};

export default pokemonsReducer;