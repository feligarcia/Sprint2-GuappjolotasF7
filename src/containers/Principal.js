import React, {useState} from 'react';
import SliderProducto from '../components/SliderProducto';
import BtnVolver from '../components/BtnVolver'
import BtnCarrito from '../components/BtnCarrito';
import SaboresPP from '../components/SaboresPP';
import Combo from '../components/Combo';
import { BtnComprar } from '../styleds/BtnComprar';
import { useParams, useNavigate } from 'react-router-dom';
import { endpoint } from '../helpers/Url';
import axios from 'axios';
import { useEffect } from 'react';
import { Flexrow } from '../styleds/Styles';


const Principal = () => {
  const params = useParams()
  const navigate = useNavigate()
  const {categoria, id} = params
  const [producto, setProducto] = useState([]);
  const [contador, setContador] = useState(1);
  const [precie, setPrecie] = useState(0);
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
console.log(contador)
let suma = contador * precie
const agregarLocal = () =>{
  console.log('no problem')
  // const compra = {
  //   nombre: `${producto.nombre}`,
  //   precio: `${producto.precio}`,
  //   cantidad: `${contador}`,
  // }
  
//  const getlocalstorage = JSON.parse(localStorage.getItem('Carrito'))
//  const anadido = getlocalstorage.unshift(compra)
//  console.log(typeof(getlocalstorage))
// const postLocal = JSON.stringify(localStorage.setItem('Carrito',compra))
}

  return (<>
        <BtnVolver />
        <Flexrow>
        <BtnCarrito /></Flexrow>
        <SliderProducto producto={producto} numero={contador => setContador(contador)} precie={setPrecie}/>
        <br></br>
        <br></br>
        <SaboresPP producto={setProducto} categoria={categoria}/>
        <Combo categoria={categoria}/>
        <BtnComprar onClick={()=> {agregarLocal() ; navigate("/carrito")}}> Agregar {contador} al carrito ${suma}</BtnComprar>



  </>);
}

export default Principal;
