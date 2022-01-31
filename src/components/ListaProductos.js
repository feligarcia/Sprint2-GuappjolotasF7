import React, { useEffect, useState, createContext  } from 'react';
import axios from 'axios';
import { endpoint } from '../helpers/Url';
import { Flexrow } from '../styleds/Styles';
import Principal from '../containers/Principal';
import { useNavigate } from 'react-router-dom';


const SetLocal = (e)=>{
        const id = e.target.id
        console.log(id);
    }
export const Guajolotas = ()=>{
    const navigate = useNavigate()
   
    const [guajolota, setGuajolota] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        axios.get(endpoint +"guajolota")
            .then(res =>{
                setGuajolota(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    
    return(
        <div className='ListaProductos'>
            {
                guajolota.map(ele =>(
                    <Flexrow className='itemListado' key={ele.id} onClick={() => navigate(`/principal/guajolota/${ele.id}`)}> 
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
                ))
            }
        </div>
    )
}

export const Bebidas = ()=>{
    const navigate = useNavigate()
    const [bebida, setBebida] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        axios.get(endpoint +"bebidas")
            .then(res =>{
                setBebida(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    return(
        <div className='ListaProductos'>
            {
                bebida.map(ele =>(
                    <Flexrow className='itemListado' key={ele.id} onClick={() => navigate(`/principal/bebidas/${ele.id}`)}> 
                        <div className='contenedorImagen'>
                            <img src={ele.imagen} alt={ele.nombre} />
                        </div>
                        <div className='descProducto bebida'>
                            <p className='descProducto nombre'>
                                {ele.nombre}
                            </p>
                            <p className='descProducto precio'>
                                {"$ "+ele.precio +" MXN"}
                            </p>
                        </div>
                    </Flexrow >
                ))
            }
        </div>
    )
}
export const Tamales = ()=>{
    const navigate = useNavigate()
    const [tamal, setTamal] = useState([]);

    useEffect(()=>{
        getData()
    },[])

    const getData = () =>{
        axios.get(endpoint +"tamales")
            .then(res =>{
                setTamal(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
    }
    return(
        <div className='ListaProductos'>
            {
                tamal.map(ele =>(
                    <Flexrow className='itemListado' key={ele.id} onClick={() => navigate(`/principal/tamales/${ele.id}`)}> 
                        <div className='contenedorImagen'>
                            <img src={ele.imagen} alt={ele.nombre} />
                        </div>
                        <div className='descProducto bebida'>
                            <p className='descProducto nombre'>
                                {ele.nombre}
                            </p>
                            <p className='descProducto precio'>
                                {"$ "+ele.precio +" MXN"}
                            </p>
                        </div>
                    </Flexrow >
                ))
            }
        </div>
    )
}