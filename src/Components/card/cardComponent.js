import React from 'react'
import { Link } from 'react-router-dom'

const CardExampleCard = ({item}) => (
  
  <div className={`card ${item.styleClass} ${item.styleExtra} `} data-id={item.id}>
    <div className="card_imgBx">
        <img src={item.assets} alt={item.nombre}></img>
    </div>
    <div className="card_description">
        <h3>{item.nombre}</h3>
        <h2 className="price">${item.precio}</h2>
        <Link to={`/item/${item.id}`}>Comprar Ahora</Link>
    </div>
  </div>
  
)

export default CardExampleCard