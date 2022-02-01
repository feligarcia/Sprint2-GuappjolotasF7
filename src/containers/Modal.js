import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import imagenprueba from '../assets/guajolotas/gp-mole.png'
import Contador from '../components/Contador.js'
import { BtnComprar } from "../styleds/BtnComprar";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export const DivCol = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top:10vh;
`    
export const ImgModal = styled.img`
width: 80px;
height: 80px;
margin: 16px;
`
export const H3Modal = styled.h3`
   color:#FA4A0C;
   text-align:center;
   margin: 10px;
        `

const ModalCarrito = () => {
    const navigate =useNavigate()


    return(
        <>
        {/* <Container fluid className="m-0 justify-content-center align-items-center"> */}
           <DivCol>
            <ImgModal src={imagenprueba}></ImgModal>
            <h3>Guajolota de Tamal Verde</h3>
            <H3Modal>$50 MXN</H3Modal>
            <Contador />
            <h3><BtnComprar onClick={()=>navigate("/carrito")}>Actualizar</BtnComprar></h3>
                <H3Modal onClick={()=>navigate("/carrito")}>Cerrar</H3Modal>
           </DivCol>


        {/* </Container> */}

        
        </>

    )

}    
export default ModalCarrito;