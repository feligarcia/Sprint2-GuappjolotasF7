import { render } from "@testing-library/react"
import React from "react"
import styled from "styled-components"
import imgvolver from '../assets/images/volver.png';


export const StyledVolver = styled.div`
display:flex;
width: 24px;
height: 24px;
position:fixed;
left: 24px;
top: 44px;

`
 
 
 function BtnVolver() {
   return (
   <StyledVolver>
       <img src={imgvolver}></img>
   </StyledVolver>
   );
 }
 
 export default BtnVolver;
 
