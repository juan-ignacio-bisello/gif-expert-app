import { useState } from "react";
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

  const [ categories , setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => {
    if (categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);
    //Otra forma
    // setCategorias( cat => [...cat, 'Black Clover']);

  }


  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
        
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={ onAddCategory }
      />

      {/* Input */}

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
