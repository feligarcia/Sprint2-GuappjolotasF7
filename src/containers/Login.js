import React, {useState, useEffect} from 'react';
import Logo from "../assets/images/logo.png";
import styled from 'styled-components';
import axios from 'axios';
import { urlusers } from '../helpers/Url';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const ImgInicio = styled.img`
width: 50%;
height: fit-content;
`
export const DivLogin = styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin-top: 32px;
padding: 25px;
`
export const ImgLogo = styled.img`
width: 80px;
height: 80px;
min-width: 80px;
`

export const Inputs = styled.input`
background-color: white;
height: 30px;
width: 100%;
border-style: none;
color: black;

`
export const Label = styled.label`
float: left;
margin: 5px auto;
`
export const Button = styled.button`
background-color: var(--Primary-color);
border-style: none;
width: 100px;
height: 30px;
float: right;
color: white;
`
export const Pcrear = styled.button`
color:var(--Primary-color);
background-color: white;
border-style: none;
`
export const Palerta = styled.p`
background-color:var(--Primary-color);

`

const Login = () => {
  const navigate = useNavigate()
  const [loginOn, setloginOn] = useState(true)
  const [alerta, setAlerta] = useState()
  const [usuarios, setUsuario] = useState({
            name: '',
            email: '',
            password: '',
            imagen:'',
  });

const [ingreso, setIngreso] = useState({
    email: '',
    password: '',
    
});
 
useEffect(() => {
  
}, [loginOn]);




const handleInputChange = ({target}) => {
  if(loginOn){
    
  setIngreso({
    ...ingreso,
[target.name]: target.value 
})

  }
else {
  setUsuario({
    ...usuarios,
  [target.name]: target.value 
  })
  }
}


const handleSubmit = async (e) =>{
e.preventDefault();
  if(loginOn){
      setAlerta('verificando...')
      leerUsuario(ingreso)
      console.log('leyendo usuario')
  } else {
    console.log('creando usuario')
    crearUsuario(usuarios)
    }
}

const crearUsuario = (usuarios) => {
  axios.post(urlusers, usuarios)
  .then(response => {
      console.log('Usuario creado')
      navigate('/login')
      console.log('No pasa de aqui?')
      
  })
 .catch(error => {
     console.log(error);
     
 })
}

const leerUsuario = async (ingreso) => {
   axios.get(urlusers)
  .then(response => {
    const existeRegistro = response.data.some(ele=> (ele.email === ingreso.email) && (ele.password === ingreso.password))
     if(existeRegistro){
             localStorage.setItem('Userguajalota',JSON.stringify(ingreso.email))
       navigate('/menu')
    }else{setAlerta('email o contraseña invalidos')}
     
  })
 .catch(error => {
     console.log(error);
     
 })
}
if (loginOn){
  return (
  <div>
    
      <DivLogin>
        
                <Link to={"/"}><ImgLogo src={Logo}></ImgLogo></Link>
                <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <Label>Correo electrónico</Label>
                            <Inputs
                                type="text"
                                className="form-control mt-2"
                                name="email"
                                autoComplete="off"
                                placeholder="Correo electronico"
                                required
                                onChange={handleInputChange}
                                />
                            <Label>Contraseña</Label>
                            <Inputs
                                className="form-control mt-2"
                                autoComplete="off"
                                name="password"
                                placeholder="Constraseña"
                                type="password"
                                required
                                onChange={handleInputChange}
                         
                            ></Inputs>
                            <Palerta>{alerta}</Palerta>
                            
                            
                            <br></br>
                            <div >
                            
                                <Button
                                    value="Save"
                                    type="submit"
                                    
                                > Iniciar</Button>
                                <Pcrear onClick={()=> setloginOn(false)}>Crear Usuario</Pcrear>
                                
                            </div>
                        </form>
                       
                        </DivLogin>
  </div>
  )} else {
    return (
      <div>
        
          <DivLogin>
          
                    <Link to={"/"}><ImgLogo src={Logo}></ImgLogo></Link>
                    <h1>Crear Usuario</h1>
                            <form onSubmit={handleSubmit}>
                                <Label>Nombre</Label>
                                <Inputs
                                    id="fileSelector"
                                    type="text"
                                    className="form-control "
                                    placeholder="Nombre"
                                    name="name"
                                    required
                                    onChange={handleInputChange}
                                   />
                                <Label>Correo electrónico</Label>
                                <Inputs
                                    type="text"
                                    className="form-control mt-2"
                                    name="email"
                                    autoComplete="off"
                                    placeholder="Correo electronico"
                                    required
                                    onChange={handleInputChange}
                                    />
                                <Label>Contraseña</Label>
                                <Inputs
                                    className="form-control mt-2"
                                    autoComplete="off"
                                    name="password"
                                    placeholder="Constraseña"
                                    type="password"
                                    required
                                    onChange={handleInputChange}
                             
                                ></Inputs>
                                <Label>Imagen</Label>
                                  <Inputs
                                    className="form-control mt-2"
                                    autoComplete="off"
                                    name="imagen"
                                    placeholder="url de tu imagen de usuario"
                                    required
                                    onChange={handleInputChange}
                             
                                ></Inputs>
                                <br></br>
                                <br></br>
                                <div >
                                    
                                    <Button
                                        value="Save"
                                        type="submit"
                                        
                                    > Guardar</Button>

                                </div>
                            </form>
                           
                            </DivLogin>
      </div>
      )

  }
}

export default Login;





    
