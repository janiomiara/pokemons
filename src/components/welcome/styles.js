import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  opacity: 0;
  background: rgb(200,158,17);
  background: linear-gradient(29deg, rgba(200,158,17,1) 35%, rgba(219,255,0,1) 100%);
  animation: 1s fadeIn forwards;

`;

export const Logo = styled.img`
  width: 50vw;
`;

export const Pokebol = styled.img`
  width: 15vw;
  animation: 1s shake;
`;
