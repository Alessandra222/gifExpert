import { useEffect, useState } from "react";
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export default function GIfGrid({category}) {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>

        

        {isLoading && (<h2 className="loader"></h2>)}

        <div className="card-grid">
          {images.map((img) =>(
            <GifItem key={img.id}
              {...img}
            />
          ))}
          
        </div>
    </>
  )
}
