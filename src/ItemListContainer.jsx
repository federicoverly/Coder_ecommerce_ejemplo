import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting, products }) {
    const [ items, setItems ] = useState([])

    const { id } = useParams()

    useEffect(() => {
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
            {products.length > 1 ? <ItemList products={items} /> : <h2>Loading</h2>}           
        </div>
    )
}

export default ItemListContainer
