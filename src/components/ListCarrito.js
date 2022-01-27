import React from 'react';
import styled from 'styled-components';
import imagenprueba from '../assets/guajolotas/gp-mole.png'


export const StyledLista = styled.div`
display:flex;
flex-direction:column;
width: 90%;
height: fit-content;
position: fixed;
top: 56px;
margin-top: 48px;
justify-content: space-evenly;
align-items: center; //pendiente centrar div horizontalmente
`
export const Styleddescripcion = styled.div`
display: flex;
flex-direction: column;
`

export const StyledLi = styled.li`
display:flex;
width: 100%;
list-style: none;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 0 10%;

`
export const StyledimgListCarr = styled.img`
width: 56px;
height: 56px;
`
export const StyledPrecio = styled.h2`
color: #FA4A0C;
`

function ListCarrito() {
  return (
    <>
  <StyledLista>
    <StyledLi>
      <StyledimgListCarr src={imagenprueba}></StyledimgListCarr>
      <Styleddescripcion>
        <h3>Guajolota Verde</h3>
        <h4>x2</h4>
      </Styleddescripcion>
      <StyledPrecio>$12 MXN</StyledPrecio>
    </StyledLi> 
  </StyledLista>
  <div></div>
  </>
  );
}

export default ListCarrito;
