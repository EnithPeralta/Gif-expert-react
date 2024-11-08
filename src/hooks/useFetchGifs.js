import { useEffect, useState } from "react";
import { GetGift } from "../helpers/GetGift";

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () =>{
         
        const newImages = await GetGift (category);
        setImages(newImages);
        setisLoading(false)
    }
    
    useEffect(()=>{ 
        getImages()
    }, [])
    return {
        images,
        isLoading:false
    }
}
