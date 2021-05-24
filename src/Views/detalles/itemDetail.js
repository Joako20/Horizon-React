import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Counter from '../../Components/counter'
import { CartContext } from "../../Contextos/cartContext";


function ItemDetail ({ item }){
  
  const [value, setValue] = useState(null)
  console.log(value)

  const {compraId,addItem,setCompraId,removeItem} = useContext(CartContext)
  
  const buyHandler = (e)=>{
    e.preventDefault();
    addItem(item,value)
  }

  const onAdd = (contador) => {
    
    setValue(contador);
    
    // addItem(item,contador)
    
  };
  
  

  
  
  return <>
    <section className="product-detail">
      <div className="img-container">
        <img src={item.assets} alt="{item.nombre}"></img>
      </div>
      <div className="info-container">
        <h3>{item.nombre}</h3>
        <div className="all-info" data-id={item.id}>
          <div className="extra-texto">
            <h4>{item.marca}</h4>
            <p>Mas de 125k usuarios lo califican de <span>EXCELENTE</span></p>
          </div>
          <div className="extra-precio">
            <h4>Precio: ${item.precio} USD</h4>
            <div className="data-p">
              <h5>Stock: {item.stock}</h5>
              <Counter stock={item.stock} value={setValue}/>
            </div>
          </div>
          <div className="extra-boton">
            <Link to="" onClick={buyHandler}>Comprar ahora</Link>
          </div>
        </div>
      </div>
    </section>

    <section className="description-detalles">
      <h3>ACERCA DE: {item.nombre}</h3>
      <p>{item.descripcion}</p>
    </section>

  </>
}


export default ItemDetail
