import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../../components/productCard"

export default function ProductPage(){
    const [products, setProducts]= useState([])
    const [loadingStatus, setLoadingStatus]= useState("loading")
    //loadinf, loaded, error

    useEffect(
        ()=>{
            if(loadingStatus== "loading"){
                axios.get("http://localhost:5000/api/products")
                .then((res)=>{
                    console.log(res.data)
                    setProducts(res.data)
                    setLoadingStatus('loaded')
            }
            )
                .catch(
                    (err)=>toast.error("Faild to fetch products")
                )
            }
                   
        }
    ,[])
    return(
        <div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center">
           {
            products.map(
                (product)=>
                    <ProductCard product={product}/>
            )
           }
        </div>
    )
}