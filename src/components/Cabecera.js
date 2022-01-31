import axios from 'axios';
import React, { Component } from 'react';
import Logo from "../assets/images/logo.png";
import { endpoint } from '../helpers/Url';
import { Flexrow, Pprodut, Search, SearchInput } from '../styleds/Styles';
import { FuncionSearch } from './FuncionSearch';
import { Bebidas, Guajolotas, Tamales } from './ListaProductos';
import BtnCarrito from '../components/BtnCarrito';

export default class Cabecera extends Component {
  constructor(){
    super()
    this.state ={
      mostrarGuajolota: true,
      mostrarBebidas: false,
      mostrarTamal: false,
      producto:'',
      productos:[]
    };
   }
    // axios.get(endpoint+"todos")
    //   .then(res=>{
       
    //   })
    //   .catch(error =>{
    //     console.log(error);
    //   })
    //   }
    // console.log(this.state.productos);
     componentDidMount() {
      fetch(endpoint+"todos")
        .then((res)=> res.json())
        .then((json)=>{
          json.map((el)=>{
            let todosproductos = {
              id: el.id,
              nombre:el.nombre,
              precio:el.precio,
              imagen:el.imagen
            }
            let productos = [...this.state.productos,todosproductos];
            this.setState({productos})
          })
        })
        
  
  
    }
 
   guajolotas =()=>{
    this.setState({
      mostrarGuajolota: true,
      mostrarBebidas: false,
      mostrarTamal: false
    })
  }
  bebidas = () =>{
    this.setState({
      mostrarGuajolota:false,
      mostrarBebidas:true,
      mostrarTamal:false
    })
  }
  tamales = ()=>{
    this.setState({
      mostrarGuajolota:false,
      mostrarBebidas:false,
      mostrarTamal:true
    })

  
    
  }
  
  render() {
    const  handleinputChange = ({target}) =>{
      this.setState({
          
          [target.name]:target.value
      })
  }
   console.log(this.state.productos);
  const productosearch = this.state.producto
  const porductoUnidad = this.state.productos
          function filterItems(query) {
  return porductoUnidad.filter(function(el) {
      return el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
const filtrado = filterItems(productosearch)
    console.log(productosearch);
    console.log(filtrado);
    return (<div className='cabecera'>
        <Flexrow className='iconosCabecera'>

            <div className='cont-image'>
            <img className='image'
             src={Logo} alt="Logo" />
            </div>
            <BtnCarrito />
            {/* <i className="bi bi-cart2"></i> */}
        </Flexrow>
        <h1>Nada como una guajolotas para empezar el día</h1>
        <Search>
            <i className="bi bi-search"></i>
            <SearchInput className='input' type="text" value={this.state.producto} onChange={handleinputChange } name='producto'
             placeholder='Sabor de guajolota, bebida...' />
        </Search>
        <Flexrow className='iconosCabecera'>
            <Pprodut className={'Pproduct'} onClick={this.guajolotas}>Guajolotas</Pprodut>
            <Pprodut className={'Pproduct'} onClick={this.bebidas}>Bebidas</Pprodut>
            <Pprodut onClick={this.tamales}className={'Pproduct'}>Tamales</Pprodut>
        </Flexrow>
        {this.state.mostrarGuajolota && <Guajolotas />}
        {this.state.mostrarBebidas && <Bebidas />}
        {this.state.mostrarTamal && <Tamales />}
    </div>);
  }
}
