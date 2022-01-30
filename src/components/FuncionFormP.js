import { getValue } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { endpoint } from '../helpers/Url';
import styled from "styled-components";
import Contador from '../components/Contador.js'
export const DivCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
top: 0px;


`    
export const ImgModal = styled.img`
width: 200px;
height: 200px;

`
export const H3Modal = styled.h3`
   color:#FA4A0C;
   text-align:center;
   margin: 10px;
        `



export const FormProductos = (id, nomblre)=>{
     const [producto,setProducto] = useState([])
    useEffect(()=>{
        getproducto()
    },[])

    const getproducto = ()=>{
        axios.get(endpoint + nomblre + id)
        .then(res =>{
            setProducto(res.data)
        })
        .catch(error=>{console.log(error)
        })
    }
       console.log(id, nomblre); 
       console.log("soy"+ producto);
}