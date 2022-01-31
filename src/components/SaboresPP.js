import React from 'react';
import styled from 'styled-components';
import verde from '../assets/sabores/verde.png'
import mole from '../assets/sabores/mole.png'
import rajas from '../assets/sabores/rajas.png'
import pina from '../assets/sabores/pina.png'
import pasas from '../assets/sabores/pasas.png'
import guayaba from '../assets/sabores/guayaba.png'
import arroz from '../assets/sabores/arroz_con_leche.png'
import cafe from '../assets/sabores/cafe.png'
import champurrado from '../assets/sabores/champurrado.png'
import chocolate from '../assets/sabores/chocolate.png'

export const DivSabores = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 160px;
    padding: 0 24px;
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


const SaboresPP = (props) =>{
  const producto = props.producto
  const {sabor} = producto
  const categoria = props.categoria
  const changeSabor = () =>{
    producto.producto()
    
  }
//   let saborestodo = {}
//   if(categoria==='bebidas'){
//      saborestodo = {
//       "arroz":{arroz},
//       "cafe":{cafe},
//       "champurrado":{champurrado},
//       "chocolate":{chocolate},
//     }
// } else{
//    saborestodo = {
//     "verde":{verde},
//     "mole":{mole},
//     "rajas":{rajas},
//     "pina":{pina},
//     "pasas":{pasas},
//     "guayaba":{guayaba},
//    }
// }
// console.log(saborestodo.keys)


  return (
  <div>
      <h2>Sabor</h2>
      <DivSabores>
        {/* { saborestodo.map(ele=>(
          <ImgSabor name={ele[0]} src={ele[0][0]} onClick={changeSabor}></ImgSabor>

        ))
          


        } */}
            
            <ImgSabor name="mole" src={mole}></ImgSabor>
            <ImgSabor name="rajas" src={rajas}></ImgSabor>       
            <ImgSabor name="pina" src={pina}></ImgSabor>
            <ImgSabor name="pasas" src={pasas}></ImgSabor>
            <ImgSabor name="guayaba" src={guayaba}></ImgSabor>
        

      </DivSabores>
  </div>
  );
}

export default SaboresPP;
