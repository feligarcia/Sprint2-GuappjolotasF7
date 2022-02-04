import React, {useState} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';





export const StyledLista = styled.div`
display:flex;
flex-direction:column;
width: 90%;

position: absolute;
top: 56px;

margin-top: 48px;
margin-left:20px;
margin-right: 20px;
justify-content: space-evenly;
align-items: center; 
`
export const Styleddescripcion = styled.div`
display: flex;
flex-direction: column;
font-size: 1rem;
align-items: flex-start;
justify-content:center;
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
export const StyledPrecio = styled.h5`
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
export const StyledTotalh3 = styled.h4`
background-color:inherit;
`
export const StyledTotalPrecioh3 = styled.h4`
color: #FA4A0C;
background-color:inherit;
`



function ListCarrito() {
  // const [valortotal, setValortotal] = useState(0);
  const navigate = useNavigate()
  
let getlocalstorage = JSON.parse(localStorage.getItem('Carrito'))
let valor = getlocalstorage.map(ele=>ele.cantidad*ele.precio)
valor = valor.reduce((accumulator, curr) => accumulator + curr)

console.log(valor)
const handleModal=(categoria,id)=>{

  
  navigate(`/modal/${categoria}/${id}`)
}

  return (
    <>
  <StyledLista>
    {
      getlocalstorage.map(ele=>(
        <StyledLi key={ele.id} onClick={()=>handleModal(ele.categoria,ele.id)}>
          <StyledimgListCarr src={ele.imagen}></StyledimgListCarr>
          <Styleddescripcion>
            <h6>{ele.nombre}</h6>
            <h6>x{ele.cantidad}</h6>
          </Styleddescripcion>
          <StyledPrecio>${ele.precio * ele.cantidad} MXN</StyledPrecio>
    </StyledLi> 
       


      ))
    }
    

          <StyledTotal>
              <StyledTotalh3>Total</StyledTotalh3>
              <StyledTotalPrecioh3>${valor}MXN</StyledTotalPrecioh3>
          </StyledTotal>
  </StyledLista>
  
  </>
  );
}

export default ListCarrito;
