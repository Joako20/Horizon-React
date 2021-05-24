import React from 'react'
import CardComponent from './cardComponent'
function cardComponentList({items}) {
    return <>
    {
        items.map(
            (item)=>{
                return<>
                    <CardComponent key={"uniqueitem"+item.id.toString()} item={item}/>
                </>
            }
        )
    }
    </>
    
}

export default cardComponentList
