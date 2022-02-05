import React, { Component } from 'react'
import { Routes, Route, Navigate, HashRouter} from 'react-router-dom'
import Principal from '../containers/Principal'
import Carrito from '../containers/Carrito'
import Inicio from '../containers/Inicio'
import Login from '../containers/Login'
import Cabecera from '../containers/Cabecera'
import ModalCarrito from '../containers/Modal'
import Pagos from '../pasarelaPagos/Pagos'



export default class AppRouter extends Component {
    render() {
        return (
                 <HashRouter>
                    
                    <Routes>
                       <Route exact path="/" element={<Inicio/>}/>
                       <Route exact path="/menu" element={<Cabecera/>}/>
                       <Route exact path="/principal/:categoria/:id" element={<Principal />} />
                       <Route exact path="*" element={<Navigate replace to="/" />}/>
                       <Route exact path="/login" element={<Login />}/>
                       <Route exact path="/carrito" element={<Carrito />}/>
                       <Route exact path="/modal/:categoria/:id" element={<ModalCarrito />}/>
                       <Route exact path="/menu/" element={<Cabecera/>}/>
                       <Route exact path='/pagos' element={<Pagos/>} />
                   </Routes>
                </HashRouter>
          
        )

    }
}