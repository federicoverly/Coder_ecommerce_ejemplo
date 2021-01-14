import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting, products }) {
    // Voy a usar este estado para guardar los productos que quiero mostrar, sean filtrados o no
    const [ items, setItems ] = useState([])

    // El useParams me va a permitir "leer" la url y lo que hay después de "categorias/ (si hay algo)"
    const { id } = useParams()

    useEffect(() => {
        // Tomo los productos que me envía App y, si hay un id, filtro todos para agarrar sólo los que
        // tengan el id señalado
        if(id){
            const category = products.filter(product => product.categoryId == id)
            setItems(category)
        }
        else{
            setItems(products)
        }

    }, [id, products])

    return (
        <div className="itemListContainer">
            <h2>{greeting}</h2>

            { /* Chequeado el filtrado envío los productos a ItemList */}

            {products.length > 0 ? <ItemList products={items} /> : <h2>Loading</h2>}           
        </div>
    )
}

export default ItemListContainer
