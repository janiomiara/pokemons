import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .8;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -500px;
  z-index: 99999;
  width: 500px;
  height: 100vh;
  background: #1592b1;
  animation: 1s slideIn forwards;
  
  @keyframes slideIn {
    from { right: -500px};
    to { right: 0 };
  }

  @media (max-width: 500px)  {
    width: 415px;
  }
`;

export const ClouseModal = styled.div`
	margin: 15px;
	cursor: pointer;
	color: white;
	width: 80px;
	height: 50px;
	transition: 200ms ease-in;
  :hover {
    cursor: pointer;
    transform: scale(1.07);
  }
  position: absolute;
`;

export const HeardModal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 30%;
    font-size: 25px;
    color: #11253b;
   	border-bottom: 1px solid #949494;
    padding: 7px 0;

    .titulo {
      font-weight: 700;
      color: #efefef;
      text-shadow: 2px 2px 4px #000000c2;
    }
`;

export const BodyModal = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 14px;
    background-color: #dddddd;
`;



export const ImgCircle = styled.div`
 margin-bottom: 10px;
  background-color: #fff;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: relative;
  box-shadow: 5px 3px 13px 0px #0000005c;
  animation: heartbeat 5s ease-in-out infinite both;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @keyframes heartbeat {
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
}

  img{
 	  width: 80%;
  }
`;