import React from 'react';
import styled from "styled-components"


export const StyledCarrito = styled.div`
display:flex;
width: 24px;
height: 24px;
position:fixed;
right: 24px;
top: 44px;

`


export default function BtnCarrito() {
  return (<>
      <StyledCarrito className="bi bi-cart2"></StyledCarrito>
  </>);
}
