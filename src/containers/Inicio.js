import React from 'react';
import Logo from "../assets/images/logo.png";
import styled from 'styled-components';
import { Link, Router, useNavigate } from 'react-router-dom';


export const DivInicio = styled.div`
display:flex;
flex-direction: column;
background-color: inherit;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
`

export const ImgInicio = styled.img`
width: 50%;
height: fit-content;
`

function Inicio() {
    const navigate = useNavigate()
    
    const handleAutoLoad =()=>{
        navigate("/Login")
    }
  return (
  <DivInicio>
    <ImgInicio src={Logo}/>
    {/* <Router>
        <Link className="link" to="/">Inicio</Link>
    </Router> */}
    
    
  </DivInicio>
  );
}

export default Inicio;
