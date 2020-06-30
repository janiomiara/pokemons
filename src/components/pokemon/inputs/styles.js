import styled from "styled-components";


export const ContainetInput = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	padding: 30px;
	align-items: center;
  	justify-content: center;
	border-bottom: 1px solid #949494;

`;

export const WrapperInput = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
	margin-left: -35px;
	color: #2274b2;
  }
  input{
    display: block;
    width: 350px;
    height: calc(1.8em + .80rem + 2px);
    padding: .400rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 15px;
    transition: border-color .15s ease-in-out,
    box-shadow .15s ease-in-out;
    }
`;