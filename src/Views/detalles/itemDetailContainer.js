
import React, { useEffect, useState } from 'react'
import ItemDetail from './itemDetail'

import { useParams } from 'react-router'
import { db } from '../../firebase'

function ItemDetailContainer() {

    const [item, setItem] = useState(undefined)
    const {id} = useParams()
    

    const getItems = async ()=>{
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data()})
            })
            console.log(docs)
            setItem(
                
                docs.find((arry) =>{
                    
                    return arry.id === Number(id)
                    
                    
                })
            )
            
        })
        
    }
    useEffect(() => {
        getItems()
    },[])
    console.log(item)
        
    return (
        <>
            
            {item === null ? <h1>Cargando...</h1> : 
            item === undefined ? <h1>Este producto no existe</h1>:<main id="dinamico"><ItemDetail item={item}/></main>}
            
        </>
        
    )
}

export default ItemDetailContainer
