import React from 'react';
import { BtnComprar } from '../styleds/BtnComprar'
import BtnVolver from '../components/BtnVolver';
import styled from "styled-components"
import CartEmpty from '../components/CartEmpty';
import { StyledDivCenter } from '../styleds/StyledDivCenter'
import ListCarrito from '../components/ListCarrito';
import ModalCarrito from './Modal';

//Carrito pendiente de volver el titulo y botones flex para que baje con la lista
export const StyledH2Carrito = styled.h2`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
position:fixed;
top: 44px;
right: 45%;

`


 
const Carrito =() => {
  return (
  <>
    
      <BtnVolver />
      <StyledH2Carrito>Carrito</StyledH2Carrito>
    
    {/* <CartEmpty /> */}
    <ListCarrito />
    <BtnComprar>
        <h2>Pagar</h2>
    </BtnComprar>
    
    

  </>
  );
}

export default Carrito;
