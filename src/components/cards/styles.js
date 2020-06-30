import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 15px;
  width: 200px;
  height: 270px;
  border-radius: 10px;
  border: 1px solid #8d8d8d;
  background: white;
  box-shadow: 10px 10px 20px 3px #00000030;

`;


export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%;
  max-width: 1200px;
`;

export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 210px;
  img {
  	padding: 10px;
  	width: 100px
  }
`;

export const WrapperTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background: #229cb2;
`;