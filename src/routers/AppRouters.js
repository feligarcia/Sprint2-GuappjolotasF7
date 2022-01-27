import React from 'react'
import { Routes, Route, Navigate, HashRouter} from 'react-router-dom'


export default class AppRouter extends Component {
    render() {
        return (
                 <HashRouter>
                     <Navbar/>
                    <Routes>
                       <Route path="/" element={<Container/>}/>
                       <Route path="/usuario" element={<Usuarios/>}/> 
                       <Route path="*" element={<Navigate to="/" />}/>
                   </Routes>
                </HashRouter>
          
        )

    }
}