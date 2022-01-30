import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import imagenprueba from '../assets/guajolotas/gp-mole.png'
import Contador from '../components/Contador.js'
import { BtnComprar } from "../styleds/BtnComprar";
import styled from "styled-components";
import { FormProductos } from "./FuncionSearch";


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



const SliderProducto = () => {

    console.log(FormProductos);
    return(
        <>
        
           <DivCol>
            <ImgModal src={imagenprueba}></ImgModal>
            <h3>Guajolota de Tamal Verde</h3>
            <H3Modal>$50 MXN</H3Modal>
            <Contador />
            
               
           </DivCol>


       

        
        </>

    )

}    
export default SliderProducto;