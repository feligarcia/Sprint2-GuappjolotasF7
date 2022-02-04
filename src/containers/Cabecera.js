import React, { Component } from 'react';
import Logo from "../assets/images/logo.png";
import { endpoint } from '../helpers/Url';
import { Flexrow, Pprodut, Search, SearchInput } from '../styleds/Styles';
import { useNavigate  } from 'react-router-dom';

import { Bebidas, Guajolotas, Tamales } from '../components/ListaProductos';
import BtnCarrito from '../components/BtnCarrito';

export default class Cabecera extends Component {
 
 
  constructor(){
    super()
    this.state ={
      mostrarGuajolota: true,
      mostrarBebidas: false,
      mostrarTamal: false,
      change: false,
      producto:'',
      productos:[]
    };
   }
  
     async componentDidMount() {
      await fetch(endpoint+"todos")
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
      change: false,
      mostrarTamal: false
    })
  }
  bebidas = () =>{
    this.setState({
      mostrarGuajolota:false,
      mostrarBebidas:true,
      change: false,
      mostrarTamal:false
    })
  }
  tamales = ()=>{
    this.setState({
      mostrarGuajolota:false,
      mostrarBebidas:false,
      change: false,
      mostrarTamal:true
    })
  
  
    
  }
  changed = ()=>{
      this.setState({
      mostrarGuajolota:false,
      mostrarBebidas:false,
      mostrarTamal:false,
      change: true 
    })
  }
  
  render() {
    
    const  handleinputChange = ({target}) =>{
      this.setState({
          
          [target.name]:target.value
      })
      
  }
  
  //  console.log(this.state.productos);
  const productosearch = this.state.producto
  const porductoUnidad = this.state.productos
          function filterItems(query) {
            return porductoUnidad.filter(function(el) {
                return el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1;
            })
          }

const filtrado = filterItems(productosearch)
    
    // console.log(filtrado);
    return (<div className='cabecera'>
        <Flexrow className='iconosCabecera'>

            <div className='cont-image'>
            <img className='image'
             src={Logo} alt="Logo" />
            </div>
            <BtnCarrito />
            
        </Flexrow>
        <h1>Nada como una guajolotas para empezar el día</h1>
        <Search>
            <i className="bi bi-search"></i>
            <SearchInput className='input' type="text" value={this.state.producto} onChange={handleinputChange } onFocus={this.changed} name='producto'
             placeholder='Sabor de guajolota, bebida...' autocomplete="off" />
        </Search>
        <Flexrow className='iconosCabecera'>
            <Pprodut className={'Pproduct'} onClick={this.guajolotas}>Guajolotas</Pprodut>
            <Pprodut className={'Pproduct'} onClick={this.bebidas}>Bebidas</Pprodut>
            <Pprodut onClick={this.tamales}className={'Pproduct'}>Tamales</Pprodut>
        </Flexrow>
        {this.state.mostrarGuajolota && <Guajolotas />}
        {this.state.mostrarBebidas && <Bebidas />}
        {this.state.mostrarTamal && <Tamales />}
      
     {this.state.change && <div>
        {filtrado.map(ele=>(
          <div key={ele.id} className='ListaProductos '>
          <Flexrow className='itemListado ' key={ele.id} onClick={() => useNavigate(`/principal/${ele.categoria}/${ele.id}`)} > 
              <div className='contenedorImagen'>
                  <img src={ele.imagen} alt={ele.nombre} />
              </div>
              <div className='descProducto'>
                  <p className='descProducto'>
                      {ele.nombre}
                  </p>
                  <p className='descProducto precio'>
                      {"$ "+ele.precio +" MXN"}
                  </p>
              </div>
          </Flexrow >
          </div>
        ))} 
      </div> }
      
    </div>);
  }
}
