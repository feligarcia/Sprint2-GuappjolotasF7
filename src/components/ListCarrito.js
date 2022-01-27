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
margin-left:20px;
margin-right: 20px;
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
height: fit-content;
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
export const StyledTotal = styled.div`
width: 100%;
height: 53px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items:center;
border-radius: 20px;
padding: 16px;
background-color:white;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
`
export const StyledTotalh3 = styled.h3`

`
export const StyledTotalPrecioh3 = styled.h3`
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
          <StyledLi>
            <StyledimgListCarr src={imagenprueba}></StyledimgListCarr>
            <Styleddescripcion>
              <h3>Guajolota Verde</h3>
              <h4>x2</h4>
            </Styleddescripcion>
            <StyledPrecio>$12 MXN</StyledPrecio>
          </StyledLi> 

          <StyledTotal>
              <StyledTotalh3>Total</StyledTotalh3>
              <StyledTotalPrecioh3>$62MXN</StyledTotalPrecioh3>
          </StyledTotal>
  </StyledLista>
  
  </>
  );
}

export default ListCarrito;
