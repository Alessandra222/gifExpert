import { useEffect, useState } from "react";
import { getGifd } from "../helpers/getGifs";

export default function useFetchGifs(category) {
    
    const [images, setImages] = useState([])
    const [isLoading, setisLoading] = useState(true)
  
      const getImages=async() =>{
        const newImages = await getGifd(category);
        setImages(newImages);
        setisLoading(false);
      }
  
      useEffect(()=>{
        getImages();
      },[])
  
  
    return {
        images,
        isLoading

    }
}
