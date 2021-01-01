import React from 'react';

function Input({name,label,value,error,onChange,type}) {
   
    return (
        <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          onChange={onChange}
          value={value}
          
          id={name}
          type={type}
          autoFocus={name === 'username' ? true : false}
          className='form-control'
        />
        {error&&<div className='alert alert-danger'>{error}</div>}
      </div>
    );
}

export default Input;