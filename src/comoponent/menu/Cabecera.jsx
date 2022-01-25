import React, { Component } from 'react';
import Logo from "../../assets/images/logo.png"

export default class Cabecera extends Component {
  render() {
    return <div>
        <div>
            <img src={Logo} alt="Logo" />
        </div>
    </div>;
  }
}
