import { render } from "@testing-library/react"
import React from "react"
import styled from "styled-components"

export const BtnComprar = styled.button`
display:flex;
flex-direction:row;
align-items: center;
width: 312px;
height: 69px;
padding: 24px;
background-color:#FA4A0C;
border-radius: 40px;
border-style:none;

${BtnComprar}:hover & {
    opacity: 0.5;
  }

` 
render(
    <BtnComprar>
        <h2>Pagar</h2>
    </BtnComprar>
)