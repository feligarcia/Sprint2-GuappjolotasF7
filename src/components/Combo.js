import React from 'react';
import styled from 'styled-components';
import { endpoint } from '../helpers/Url';
import { useState } from 'react';
import axios from 'axios';

export const DivCombo = styled.div`
    display: flex;
    flex-direction:column;
    padding: 0 24px;
 `


export const FormPro = styled.form`
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
export const H2Titulo = styled.h2`

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
const TitleLet = ({ descripcion }) => <H2Titulo>{descripcion}</H2Titulo>

const Combo =({categoria}) => {
    const [combo, setCombo] = useState([]);
    const [carrito, setCarrito] = useState([]);
    let captiondescrip =''
    let titulo = ''
    let cate = ''
      
    
    if(categoria==='bebidas'){
        titulo = 'Guajolocombo'
        captiondescrip = 'Selecciona la torta que más te guste y disfruta de tu desayuno.'
        cate = 'guajolota'
    } else{
         titulo = 'Bebidas'
         captiondescrip = 'Selecciona la bebida que más te guste y disfruta de tu desayuno.'
         cate = 'bebidas'
    }
    const getData = () =>{
        axios.get(endpoint + `${cate}/`)
            .then(res =>{
                setCombo(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }



    
        getData()

       const handleChanged = ({target}) => {
        if(target.checked ===true)
        setCarrito({
            ...carrito,
                [target.id]: target.name}
            )
        console.log(carrito)
      }

  return (
  <DivCombo>
        <TitleLet descripcion={titulo}></TitleLet>
        <Descrip descripcion={captiondescrip} />
        <FormPro onChange={handleChanged}>
            {
                combo.map(ele=>(
                    <DivElement key={ele.id}>
                        <InCheck type="checkbox" id={ele.nombre} value={ele.id} name={ele.precio} ></InCheck>
                        <ImgType src={ele.imagen}></ImgType>
                        <H6name>{ele.nombre}</H6name>
                        <H6price>+ ${ele.precio} MXN</H6price>
                    </DivElement>


                ))
                


            }
            
            
        </FormPro>
        
  </DivCombo>);
}

export default Combo;
