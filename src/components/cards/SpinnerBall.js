import React from 'react';
import styled from 'styled-components';
import Pokeball from '../../assets/pokeball.png';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100px;

  img {
    border-radius: 50%;
    width: 100px;
    z-index: 1;
    bottom: -43px;
    opacity: 0;
    animation: 1s fadeIn forwards, 1s shake infinite;
  }
`;

const SpinnerBall = ({ active }) => {
  return (
    <Container >
      {active && <img src={Pokeball} />}
    </Container>
  )
}

export default SpinnerBall
