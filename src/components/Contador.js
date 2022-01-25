import { Button } from 'react-bootstrap';
import React, {useState} from 'react';
import useCounter from './useCounter';

const Counter = () => {
  const {counter, handledAdd,handledReset,handledSubstract} = useCounter(1)
  // const [counter, setCounter] = useState(0);

  // const handledSubstract = () => {
  //     setCounter(counter - 1)
  //   }

  //   const handledReset = () => {
  //     setCounter(0)
  //   }

  //   const handledAdd = () => {
  //     setCounter(counter + 1)
  //   }
  
  return( <div>
    <h1>Counter: {counter}</h1>
    <Button variant="warning" onClick={handledSubstract}>Restar</Button>
    <Button variant="danger" onClick={handledReset}>Reset</Button>
    <Button variant="warning"onClick={handledAdd}>Sumar</Button>  
  </div>
  )
}
export default Counter;