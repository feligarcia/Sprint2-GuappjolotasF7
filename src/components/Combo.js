import React from 'react';
import styled from 'styled-components';
import imagenprueba from '../assets/bebidas/champurrado.png'

export const DivCombo = styled.div`
    display: flex;
    flex-direction:column;
    padding: 0 24px;
 `


export const DivPro = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 160px;
 `

export const DivElement = styled.div`

position:relative;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content: flex-end;
background-color:white;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
border-radius: 20px;
padding: 16px;
margin: 4px 4px;

`

export const InCheck = styled.input`
position:absolute;
top:16px;
right: 16px;
width: 20px;
height: 20px;
border-color: black;

`
export const ImgType = styled.img`
    background-color: inherit;
    width: 45%;
    height: 45%;
 `

export const H6name = styled.h6`
    background-color: inherit;
 `
 export const H6price = styled.h6`
    color: var(--Primary-color);
    background-color: inherit;
 `
  export const Pdes = styled.p`
  color: gray;
  background-color: inherit;
`

const Descrip = ({ descripcion }) => <Pdes>{descripcion}</Pdes>

function Combo() {
  return (
  <DivCombo>
        <h2>Guajolocombo</h2>
        <Descrip descripcion="Selecciona la bebida que más te guste y disfruta de tu desayuno.." />
        <DivPro>
            <DivElement>
                <InCheck type="checkbox" id="cbox1" value="first_checkbox"></InCheck>
                <ImgType src={imagenprueba}></ImgType>
                <H6name>Champurrado</H6name>
                <H6price>+ $12 MXN</H6price>
            </DivElement>
            <DivElement>
            <InCheck type="checkbox" id="cbox1" value="first_checkbox"></InCheck>
                <ImgType src={imagenprueba}></ImgType>
                <H6name>Champurrado</H6name>
                <H6price>+ $12 MXN</H6price>
            </DivElement>
            <DivElement>
            <InCheck type="checkbox" id="cbox1" value="first_checkbox"></InCheck>
                <ImgType src={imagenprueba}></ImgType>
                <H6name>Champurrado</H6name>
                <H6price>+ $12 MXN</H6price>
            </DivElement>

        </DivPro>
        
  </DivCombo>);
}

export default Combo;
