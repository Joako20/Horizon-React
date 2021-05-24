import React, {createContext,useEffect, useState } from 'react'


export const CartContext = createContext("default");

export function CartProvider({children}) {



    const [carritoState, setCarritoState] = useState([])
    console.log("carrito log:",`${carritoState}` )
    
        
    function addItem(item,quantity){
        console.log("carrito state 1:", carritoState)
        let existId = false
        if(carritoState.length === 0){
            console.log("Se ejecuta si array vacio")
            carritoState.push({item,quantity})
            console.log("carrito sate 2:", carritoState)
            
        }
        else{
            console.log("Se ejecuta si array tiene productos")
            console.log(existId)
            carritoState.map((producto)=>{
                    if(producto.item.id === item.id){
                        existId = true
                        console.log("cantidad",producto.quantity)
                        console.log(existId)
                        producto.quantity = producto.quantity + quantity
                        console.log("cantidad 2",producto.quantity)
                    } 
                })

            if(existId){
                existId = false
                console.log(existId)
            }
            else{
                carritoState.push({item,quantity})
            }
        }

        console.log("carrito state 3:", carritoState)
        return

    }
    
    function removeItem(itemId){
        console.log("carrito:", carritoState)
        carritoState.map((producto)=>{
            if(producto.item.id === itemId){
                let pruebarender = carritoState
                pruebarender.splice(carritoState.indexOf(producto),1)
                console.log("comprobando cambio",pruebarender)
                setCarritoState(pruebarender)
            }
        })
        console.log("carrito remove:", carritoState)
        
        
    }

    function clear(){
        console.log("carrito:", carritoState)
        setCarritoState([])
    }
    
    return (
    <CartContext.Provider value={{
        carritoState,addItem,setCarritoState,removeItem,clear
    }}>
        {children}
    </CartContext.Provider>
    );
}

export default CartProvider
