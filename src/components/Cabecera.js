import React, { Component } from 'react';
import Logo from "../assets/images/logo.png";
import { Flexrow, Pprodut, Search, SearchInput } from '../styleds/Styles';

export default class Cabecera extends Component {
  render() {
    return (<div className='cabecera'>
        <Flexrow>

            <div className='cont-image'>
            <img className='image'
             src={Logo} alt="Logo" />
            </div>

            <i className="bi bi-cart2"></i>
        </Flexrow>
        <p>Nada como una guajolotas para empezar el día</p>
        <Search>
            <i className="bi bi-search"></i>
            <SearchInput type="text" name='producto'
             placeholder='Sabor de guajolota, bebida...' />
        </Search>
        <Flexrow>
            <Pprodut className='Pproduct'>Guajolotas</Pprodut>
            <Pprodut className='Pproduct'>Bebidas</Pprodut>
            <Pprodut className='Pproduct'>Tamales</Pprodut>
        </Flexrow>
    </div>);
  }
}
