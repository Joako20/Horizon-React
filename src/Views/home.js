import React from 'react'
import Carrusel from '../Components/carrusel'
import CardContainer from '../Components/card/cardContainer'
function home() {
    return (
        <>
            <Carrusel/>
            <main>
                <section className="sec_index">
                    <div className="sec_index_title">
                        <h2>productos</h2>
                        <p>Las herramientas adecuadas para el rendimiento adecuado</p>
                    </div>
                    <CardContainer/>
                </section>
            </main>
        </>
    )
}

export default home