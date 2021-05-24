import React, { useContext, useEffect } from 'react'
import { CartContext } from "../Contextos/cartContext";
function CartItem() {
    
    const {carritoState,addItem,setCarritoState,removeItem,clear} = useContext(CartContext)
    
    
    return (
        <>
            {
                carritoState.map(
                    (cartP)=>{
                        console.log(cartP)
                        const onRemove = ()=>{
                            removeItem(cartP.item.id)
                            
                        }
                        
                        return <>
                            <tr class="element-product" data-id={cartP.item.id}>
                                <td class="img-col">
                                    <div><img src={cartP.item.assets} alt={cartP.item.nombre}></img></div>
                                </td>
                                <td class="name-col">{cartP.item.nombre}</td>
                                <td class="price-col">{cartP.item.precio}</td>
                                <td class="amount-col">
                                    <button class="botonResta">-</button>
                                        <input class="cantidad-productos" type="number" min="1" value={cartP.quantity}></input>
                                    <button class="botonSuma">+</button>
                                </td>
                                <td class="subtotal-col">$</td>
                                <td class="delet-col">
                                    <button class="delet-button" onClick={onRemove}>X</button>
                                </td>
                            </tr>  
                        </>
                    }
                )
            }

        </>
        
    )
}

export default CartItem
