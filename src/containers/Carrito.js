import React from 'react';
import { BtnComprar } from '../styleds/BtnComprar'
import BtnVolver from '../components/BtnVolver';
import styled from "styled-components"
import CartEmpty from '../components/CartEmpty';
import { StyledDivCenter } from '../styleds/StyledDivCenter'
import ListCarrito from '../components/ListCarrito';
import ModalCarrito from './Modal';
import { useNavigate } from 'react-router-dom';

//Carrito pendiente de volver el titulo y botones flex para que baje con la lista
export const StyledH2Carrito = styled.h2`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
position:absolute;
top: 44px;
left: 50%;

`
export const DivBtn = styled.div`
position: absolute;
top:90vh;
`
export const DivContenedor = styled.div`
position: relative;

`
export const H2Btn = styled.h2`
background-color:inherit;

`

 
const Carrito =() => {
  const getlocalstorage = JSON.parse(localStorage.getItem('Carrito'))
  const navigate = useNavigate()
  return (
  <DivContenedor>
    
      <BtnVolver />
      <StyledH2Carrito>Carrito</StyledH2Carrito>
    {getlocalstorage 
       ? <ListCarrito />
      : <CartEmpty />
         
    }
    
    <DivBtn>
      <BtnComprar >
          <H2Btn onClick={()=>navigate("/carrito")}>Pagar</H2Btn>
      </BtnComprar>
    </DivBtn>
    
    

  </DivContenedor>
  );
}

export default Carrito;
