import React, {useState} from 'react';
import SliderProducto from '../components/SliderProducto';
import BtnVolver from '../components/BtnVolver'
import BtnCarrito from '../components/BtnCarrito';
import SaboresPP from '../components/SaboresPP';
import Combo from '../components/Combo';
import { BtnComprar } from '../styleds/BtnComprar';
import { Params, useParams } from 'react-router-dom';
import { endpoint } from '../helpers/Url';
import axios from 'axios';
import { useEffect } from 'react';


const Principal = () => {
  const params = useParams()
  const {categoria, id} = params
  const [producto, setProducto] = useState([]);
  console.log(params)

  const getData = () =>{
    axios.get(endpoint + `${categoria}/${id}`)
        .then(res =>{
            setProducto(res.data)
        })
        .catch(error =>{
            console.log(error);
        })
}
useEffect(() => {
  getData()
  
}, []);


  return (<>
        <BtnVolver />
        {/* <BtnCarrito /> */}
        <SliderProducto producto={producto}/>
        <br></br>
        <br></br>
        <SaboresPP producto={setProducto}/>
        <Combo categoria={categoria}/>
        <BtnComprar> Agregar 1 al carrito $25.00</BtnComprar>



  </>);
}

export default Principal;
