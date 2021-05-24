import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Contextos/cartContext";
import CartItem from '../Components/cartItem'
function Cart() {
    const {carritoState,addItem,setCarritoState,removeItem,clear} = useContext(CartContext)

    

    return (
        <>
        <main>
            <section className="carrito-intro">
                <h1>Finaliza tu compra</h1>
                <p>Verifica que los datos sean correctos y continua hacia el procesamiento de tu pago (Proximamente!)</p>
            </section>
            <section className="catalogo">
                <table className="product-display">
                    <tbody>
                    <tr className="product-display_head">
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                    {carritoState.length === 0 ? <tr className="no-product"><td><h2>No hay productos en el carrito</h2></td></tr> : <CartItem/>}
                    </tbody>
                </table>
            </section>
            <section className="pay-info">
            <div className="pay-info_continuar">
                <button className="vaciar-carrito" onClick={clear}>Vaciar Carrito</button>
                <button>Procesar pago</button>

            </div>
            <div className="pay-info_total">
                <div className="pay-info_total_contenedor">
                    <p className="total-extra">Impuestos: $0.00 </p>
                    <p className="total-extra">Envio: $0.00 </p>
                    <p className="total-monto">Total: $0</p>
                </div>
            </div>
        </section>
        </main>
        </>
    )
}

export default Cart
