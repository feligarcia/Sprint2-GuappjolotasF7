import React, { Component } from 'react';
import Logo from "../assets/images/logo.png";
import { Flexrow, Pprodut, Search, SearchInput } from '../styleds/Styles';
import { Bebidas, Guajolotas, Tamales } from './ListaProductos';

export default class Cabecera extends Component {
  constructor(){
    super()
    this.state ={
      mostrarGuajolota: true,
      mostrarBebidas: false,
      mostrarTamal: false
    }
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
    return (<div className='cabecera'>
        <Flexrow className='iconosCabecera'>

            <div className='cont-image'>
            <img className='image'
             src={Logo} alt="Logo" />
            </div>

            <i className="bi bi-cart2"></i>
        </Flexrow>
        <h1>Nada como una guajolotas para empezar el día</h1>
        <Search>
            <i className="bi bi-search"></i>
            <SearchInput type="text" name='producto'
             placeholder='Sabor de guajolota, bebida...' />
        </Search>
        <Flexrow className='iconosCabecera'>
            <Pprodut className='Pproduct' onClick={this.guajolotas}>Guajolotas</Pprodut>
            <Pprodut className='Pproduct' onClick={this.bebidas}>Bebidas</Pprodut>
            <Pprodut className='Pproduct'onClick={this.tamales}>Tamales</Pprodut>
        </Flexrow>
        {this.state.mostrarGuajolota && <Guajolotas />}
        {this.state.mostrarBebidas && <Bebidas />}
        {this.state.mostrarTamal && <Tamales />}
    </div>);
  }
}
