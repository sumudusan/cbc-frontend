import axios from "axios"
import { useState } from "react"

export default function AdminProductsPage(){

    const[products, setProducts]= useState(
       [
        {

        }
       ]
    )

    axios.get("http://localhost:5000/api/products").then((res)=>{
        console.log(res.data)
        setProducts(res.data)
    })

    return(
        <div>
            <h1>Admin Products Page</h1>
            {
                products.map(
                    (products,index)=>{
                        return(
                            <div key={product._id}>
                                {index}
                                {products.productname}
                                </div>
                        )
                    }
                )
            }        
        </div>
    )
}