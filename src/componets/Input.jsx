import React, { useState } from 'react';
import {mask, unMask} from 'remask';

const Input = ({type}) => {
const [value,setValue]=useState('');


const handleChange=(e)=>{
setValue(unMask(e.target.value))
}

  return (
      <>
    <input placeholder='(99) 9999-9999' type={type} onChange={handleChange} value={mask(value,['(99) 9999-9999'])} />
    <div>valor: {value}</div>
      </>
  );
};

export default Input;
