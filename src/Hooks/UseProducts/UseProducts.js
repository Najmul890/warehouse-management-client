import { useEffect, useState } from "react"

export const UseProducts=()=>{
    const [products, setProducts]= useState([]);
    useEffect(()=>{
        fetch('https://sleepy-reaches-87605.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    return [products, setProducts]
}