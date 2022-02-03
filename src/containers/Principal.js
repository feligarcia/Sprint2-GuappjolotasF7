import React, {useState, useEffect} from 'react';
import SliderProducto from '../components/SliderProducto';
import BtnVolver from '../components/BtnVolver'
import BtnCarrito from '../components/BtnCarrito';
import SaboresPP from '../components/SaboresPP';
import Combo from '../components/Combo';
import { BtnComprar } from '../styleds/BtnComprar';
import { useParams, useNavigate } from 'react-router-dom';
import { endpoint } from '../helpers/Url';
import axios from 'axios';
import { Flexrow } from '../styleds/Styles';


const Principal = () => {
  const [carrito, setCarrito] = useState([]);
  const params = useParams()
  const navigate = useNavigate()
  const {categoria, id} = params
  const [producto, setProducto] = useState([]);
  const [contador, setContador] = useState(1);
  // const [precie, setPrecie] = useState(0);
  const [miralo, setMiralo] = useState({});


  // console.log(params)

  const getData = () =>{
    axios.get(endpoint + `${categoria}/${id}`)
        .then(res =>{
            setProducto(res.data)              
            setMiralo([{
              id:res.data.id,
              nombre:res.data.nombre,
              imagen:res.data.imagen,
              precio: res.data.precio,
              cantidad: contador
            }])
            
            console.log('colombia perdedor')            
        })
        .catch(error =>{
            console.log(error);
        })
}
useEffect( () => {
  getData(endpoint)
   
}, []);

//cantidad del carrito, por el momento solo suma el largo que hay en el carrito + contador
let conta = carrito.length + contador

//configurando funcion que me sume todo lo que hay en el carrito en campo cantidad
// let reducer = (previousValue, currentValue) => previousValue + currentValue;
let suma = 0
// if(carrito.length > 0){
// let suma = carrito.reduce(reducer)}
console.log(suma)

const agregarLocal = () =>{
  miralo[0].cantidad = contador
  let total = [...carrito, ...miralo] 
  
  // setCarrito(
  //   ...carrito,
  //   [miralo]) //aqui esta el lio, porque no me deja agregar el carrito

  localStorage.setItem('Carrito', JSON.stringify(total))

}

  return (<>
        <BtnVolver />
        <Flexrow>
        <BtnCarrito /></Flexrow>
        <SliderProducto producto={producto} numero={contador => setContador(contador)}/>
        <br></br>
        <br></br>
        <SaboresPP producto={setProducto} categoria={categoria}/>
        <Combo categoria={categoria} canasta={carrito} anaCarrito={setCarrito}/>
        <BtnComprar type="submit" form="comboscheck" onClick={()=> {agregarLocal() ; 
          navigate("/carrito")
          }}> Agregar {conta} al carrito ${suma}</BtnComprar>



  </>);
}

export default Principal;
