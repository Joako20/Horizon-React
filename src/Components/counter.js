import React, { useContext, useEffect, useState } from "react";


function Counter({ stock, value }) {

    const [contador, setContador] = useState(1);
    value(contador) 
    
    const incrementar = () => {
        if (contador < stock) {
        setContador(contador + 1);
        }
    };

    const decrementar = () => {
        let min = 1;
        if (contador > min) {
        setContador(contador - 1);
        }
    };

    return (
        <>
            {stock === 0 ? <h5>Sin Stock!!!</h5>:
            <div className="counter">
                <button className="botonResta" onClick={decrementar}>-</button>
                    <input className="cantidad-productos" type="number" min="1" value={contador}></input>
                <button className="botonSuma" onClick={incrementar}>+</button>
            </div>
            }
        </>
    )
}

export default Counter
