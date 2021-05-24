import React, { useState, useEffect } from "react";
import CardComponentList from './cardComponentList';
// import Spinner from '../../loader/loader'
import { useParams } from "react-router";
import { db } from '../../firebase'
function CardContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    const getItems = async ()=>{
        setLoading(true)
        db.collection('productos').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id})
            })
            if(id === undefined){
                setProductos(docs)
            }
            else{
                setProductos(docs.filter(category => category.marca === id))
            }
            setLoading(false)
        })
        
        
    }
    useEffect(() => {
        
        getItems()
        
    },[])
    
    return (
        <>
            {loading ? <h1>Cargando...</h1> : <div className="catalogo_row"><CardComponentList items={productos}/></div>}
        </>
    )
}

export default CardContainer
