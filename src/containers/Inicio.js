import React, {useEffect} from 'react';
import Logo from "../assets/images/logo.png";
import styled from 'styled-components';
import { Link, Router, useNavigate } from 'react-router-dom';
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
        function IraLogin(){ navigate("/menu")}
        const espera =setTimeout(IraLogin, 2000);
    }
    useEffect(() => {
        handleAutoLoad()
    }, []);
    
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
