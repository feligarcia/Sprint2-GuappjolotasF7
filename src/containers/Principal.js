import React from 'react';
import SliderProducto from '../components/SliderProducto';
import BtnVolver from '../components/BtnVolver'
import BtnCarrito from '../components/BtnCarrito';
import SaboresPP from '../components/SaboresPP';
import Combo from '../components/Combo';
import { BtnComprar } from '../styleds/BtnComprar';
import { FormProductos } from '../components/FuncionFormP';


function Principal() {
  return (<>
        <BtnVolver />
        <BtnCarrito />
        <SliderProducto />
        <br></br>
        <br></br>
        <SaboresPP />
        <Combo />
        <BtnComprar> Agregar 1 al carrito $25.00</BtnComprar>



  </>);
}

export default Principal;
