import React from "react"
import styled from "styled-components"
import imgvolver from '../assets/images/volver.png';
import { useNavigate } from "react-router-dom";


export const StyledVolver = styled.div`
display:flex;
width: 24px;
height: 24px;
position:fixed;
left: 24px;
top: 44px;
border-radius:12px;

`
 
 
 function BtnVolver() {
   const navigate = useNavigate()
   return (
   <StyledVolver >
       <img src={imgvolver} onClick={()=>navigate("/menu")}></img>
   </StyledVolver>
   );
 }
 
 export default BtnVolver;
 
