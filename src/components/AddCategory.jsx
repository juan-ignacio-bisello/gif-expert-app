import React, { useState } from 'react'

export const AddCategory = () => {
  
  
    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = () => {
        setInputValue( event.target.value )
    }

    const onSubmit = ( event ) => {
        event.preventDeafault();
        console.log(inputValue)
    }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
        <input
            type='text'
            placeholder='Buscar gifts'
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    
  )
}
