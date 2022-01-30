import React from 'react';
import styled from 'styled-components';
import verde from '../assets/sabores/verde.png'
import mole from '../assets/sabores/mole.png'
import rajas from '../assets/sabores/rajas.png'
import pina from '../assets/sabores/pina.png'
import pasas from '../assets/sabores/pasas.png'
import guayaba from '../assets/sabores/guayaba.png'

export const DivSabores = styled.div`
    display: flex;
    flex-direction:column;
    padding: 0 24px;
    justify-content: space-between;
    margin: 24px 0;
`
export const DivRow = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    margin: 24px 0;
`
export const ImgSabor = styled.img`
    width:64px;
    height:69px;
    opacity: 0.5;
    &:hover {
    opacity: 1;
  }
`


function SaboresPP() {
  return (<div>
      <h2>Sabor</h2>
      <DivSabores>
        <DivRow>
            <ImgSabor src={verde}></ImgSabor>
            <ImgSabor src={mole}></ImgSabor>
            <ImgSabor src={rajas}></ImgSabor>
        </DivRow>
        <DivRow>
            <ImgSabor src={pina}></ImgSabor>
            <ImgSabor src={pasas}></ImgSabor>
            <ImgSabor src={guayaba}></ImgSabor>
        </DivRow>

      </DivSabores>
  </div>);
}

export default SaboresPP;
