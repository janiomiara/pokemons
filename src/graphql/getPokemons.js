import gql from 'graphql-tag';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;


export const GET_POKEMON_ID = gql`
    query getPokemons($id: String!) {
        pokemon(id: $id) {
            id
            name
            image
            types
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`;

export const GET_POKEMON = gql`
    query getPokemons($name: String!) {
        pokemon(name: $name) {
            id
            name
            image
            types
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`;