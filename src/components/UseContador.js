import React, { useState } from 'react';

const useCounter = (value = 1) =>{
    const [counter, setCounter] = useState(value);

    const handledSubstract = () => {
        setCounter(counter - 1)
      }
  
      const handledReset = () => {
        setCounter(value)
      }
  
      const handledAdd = () => {
        setCounter(counter + 1)
      }
  return {
      handledAdd,
      handledReset,
      handledSubstract,
      counter,

  };
}

export default useCounter;