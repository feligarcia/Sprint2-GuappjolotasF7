import Carrito from "./Carrito";
import React from 'react';
import Cabecera from '../components/Cabecera';
import ModalCarrito from "./Modal";
import { Bebidas, Guajolotas, Tamales } from "../components/ListaProductos";
import SliderProducto from "../components/SliderProducto";
import Principal from "./Principal";


function App() {
  return (
    <div className='App'>
      {/* <Cabecera/> */}
      {/* <Carrito /> */}
      {/* <ModalCarrito /> */}
      {/* <SliderProducto /> */}
      
      <Principal />
      
    </div>
  );
}

export default App;