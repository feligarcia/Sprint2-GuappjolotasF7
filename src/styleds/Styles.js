import styled from "styled-components";




export const Flexrow = styled.div`
    display: flex;
    padding: 3% 5% 2% 0;
    position:relative;
 
`

export const Search = styled.div`
    border-radius: 50px;
    background-color: #e7e7e7;
    padding: 5%;
    width: 80%;
    height: 10%;
    margin:auto;
    display:flex;
    gap:2%;
    
    
`
export const SearchInput = styled.input`
    width:100%;
    border:none;
    background-color: #e7e7e7;
    &:focus {
        border-style:none none solid none;
        border-color: #F7D58D;
        
    }
    
`

export const Pprodut = styled.p`
    font-size: 1rem;
    
`