import { useEffect, useState } from "react"
import loadCart from "../utils/cartFunction"

export default function Cart (){
    const [cart, setCart]= useState([])
    useEffect(
        ()=>{
            setCart(loadCart() )
        }
    )

    return(
        <div className="w-full h-full overflow-scroll
        flex flex-wrap justify-center">
            {cart.map(
                (item)=>{
                    return(
                        <span>{item.productId} * {item.qty}</span>
                    )
                }
            )}
        </div>
    )
}