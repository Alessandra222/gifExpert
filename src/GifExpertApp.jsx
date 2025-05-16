import { useState } from "react"
import {AddCategory, GIfGrid} from "./components/index.js";

export default function GifExpertApp() {

  const [categorias, setcategorias] = useState(['Dylan "Obrien']);

  const onAddCategory = (e) =>{
    if(categorias.includes(e)) return

    //setcategorias([...categorias, 'ola']);
    setcategorias(cat =>[...cat,e]);

  }
  
  return (
    <>
      <div>GifExpertApp</div>

      <AddCategory onNewCategory={onAddCategory}/>

      <button
        onClick={onAddCategory}>Agregar</button>

        {categorias.map(category =>( 
          <GIfGrid key={category} category={category}/>
        ))
        }
    
    </>
    
  )
}
