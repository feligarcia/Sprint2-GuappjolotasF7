import React from 'react'
import { Routes, Route, Navigate, HashRouter} from 'react-router-dom'
import Principal from '../containers/Principal'
import Carrito from '../containers/Carrito'
import Inicio from '../containers/Inicio'
import Login from '../containers/Login'


export default class AppRouter extends Component {
    render() {
        return (
                 <HashRouter>
                    
                    <Routes>
                       <Route path="/" element={<Inicio/>}/>
                       <Route path="/usuario" element={<Usuarios/>}/> 
                       <Route path="/principal" element={<Principal />} />
                       <Route path="*" element={<Navigate replace to="/" />}/>
                       <Route path="/Carrito" element={<Carrito />}/>
                       <Route path="/Login" element={<Login />}/>
                   </Routes>
                </HashRouter>
          
        )

    }
}