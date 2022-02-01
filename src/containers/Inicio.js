import React from 'react';
import Logo from "../assets/images/logo.png";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { keyframes } from 'styled-components'



export const AniInicio = keyframes`
 
 0% { height: 400px; width: 400px; opacity: 1 }
 30% { height: 405px; width: 405px; opacity: 0.7; }
 100% { height: 100px; width: 100px; opacity: 0.4; }
`


export const DivInicio = styled.div`
display:flex;
flex-direction: column;
background-color: inherit;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
animation-name: ${AniInicio};
animation-duration: 3s;
`

export const ImgInicio = styled.img`
width: 50%;
height: fit-content;
`

function Inicio() {
    const navigate = useNavigate()

    const handleAutoLoad =()=>{
      const leerUser = localStorage.getItem('Userguajalota')
       function IraLogin(){
       if(leerUser){navigate("/menu")} else {navigate('/login')}}
       setTimeout(IraLogin, 2000)
    }
    
    handleAutoLoad()
  return (
  <DivInicio>
    <ImgInicio src={Logo}/>
    
    
    
  </DivInicio>
  );
}

export default Inicio;
