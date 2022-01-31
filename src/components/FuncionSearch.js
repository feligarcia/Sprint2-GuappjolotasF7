import React, { useState } from 'react';
import { Search, SearchInput } from '../styleds/Styles';



export const FuncionSearch = ()=>{
  const [buscar, setBuscar]= useState({
      producto:''
  })
  
  const handleinputChange = ({target}) =>{
      setBuscar({
          ...buscar,
          [target.name]: target.value
      },[])
      console.log(buscar);
  }
  
    return(
        <Search>
            <i className="bi bi-search"></i>
            <SearchInput className='input' type="text" value={buscar.producto} onChange={handleinputChange } name='producto'
             placeholder='Sabor de guajolota, bebida...' />
        </Search>
    )
}