import { useState } from "react";
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  const [ categories , setCategorias ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    
    setCategorias([ 'Black Clover', ...categories ]);
    //Otra forma
    // setCategorias( cat => [...cat, 'Black Clover']);

  }


  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
        
      <AddCategory />

      {/* Input */}
      <button onClick={ onAddCategory }>Agregar</button>

      {/* Listado de Gif */}
      <ol>
        {
        categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }
      </ol>
    </>
   
  )
}
