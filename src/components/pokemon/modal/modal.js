import React from 'react';
import {createPortal} from 'react-dom';
import {Bookmark, LogOut, User, Zap} from 'react-feather';
import {ContainetInput, WrapperInput} from '../inputs/styles';
import {BodyModal, ClouseModal, Container, HeardModal, ImgCircle, Overlay} from './styles';

const Modal = ({handleModal, showModal, dataPokemon, onChangeName, onChangeType, onChangeSpecial}) => {
	const {types, image, name, attacks: {special}} = dataPokemon
	return (
		createPortal(
			<div>
				{showModal &&
				<>
					<Overlay/>
					<Container>
						<ClouseModal onClick={handleModal}><LogOut/></ClouseModal>
						<HeardModal>
							<ImgCircle>
								<img src={image} alt={''}/>
							</ImgCircle>
							<div className={'titulo'}>{name}</div>
						</HeardModal>
						
						<BodyModal>
							<ContainetInput>
								<div>Name</div>
								<WrapperInput>
									<input type="text" placeholder={'Name'} value={name}
										   onChange={(e) => onChangeName(e)}/>
									<span><User/></span>
								</WrapperInput>
							</ContainetInput>
							
							<ContainetInput>
								<div>Special</div>
								{special.map(({name}) => {
									return (
										<WrapperInput>
											<input type="text" placeholder={'Special'} name={name} value={name}
												   onChange={(e) => onChangeSpecial(e)}/>
											<span><Zap/></span>
										</WrapperInput>
									)
								})}
							</ContainetInput>
							
							<ContainetInput>
								<div>Types</div>
								{types.map((types) => {
									return (
										<WrapperInput>
											<input type="text" placeholder={'Types'} value={types} name={types}
												   onChange={(e) => onChangeType(e)}/>
											<span><Bookmark/></span>
										</WrapperInput>
									)
								})}
							</ContainetInput>
						</BodyModal>
					</Container>
				</>
				}
			</div>, document.body
		))
}

export default Modal;
