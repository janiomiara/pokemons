import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  animation: 1s fadeIn ease-in forwards;
  
  button.actions {
    position: absolute;
    z-index: 2;
    top: 0;
    height: 60px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #fff;
    box-shadow: 3px 3px 6px #b3b3b3;
    cursor: pointer;
    transition: 300ms;
  }

  button#back-home {
    left: 10px;
    color: #e44949;

    :hover {
      background: #e44949;
      color: #fff;
    }
  }

  button#edit {
    left: 80px;
    color: #4bb7de;

    :hover {
      background: #4bb7de;
      color: #fff;
    }
  }
`;

export const Hearder = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 55%;
  background: #ffffff;
`;

export const Imagen = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  margin: 0;
  
  .titulo{
  	font-weight: bold;
  	font-size: 35px;
  }
`;


export const BodyPokemon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-radius: 15px 15px 0 0 ;
  margin: 0;
  width: 100vw;
  height: 45%;
  background: #25B3D5;
  padding: 10px;
`;

export const ProgrsCard = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  //justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 10px;
  width: 380px;
  height: 100%;
  padding: 15px;
  background: #f6f6f6;
`;

export const HearderCard = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  height: 100px;
  font-size: 25px;
  font-weight: bold;
    color: #2290b2;

`;

export const BodyCard = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 23px;

  
  .title{
  	color: #8d8d8d;
  	margin-top: 15px;
  	font-weight: bold;
  	text-transform: uppercase;
  	font-style: italic;
  }

`;