import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList( { products }) {

    return (
        <div className="itemList">
            
            { /* A los productos recibidos los voy a mapear. Esto me permite acceder a cada uno de ellos */}
            { /* Por cada producto voy a usar el componente Item */}

            { products.map( product => <Item key={product.id} id={product.id} 
            name={product.name} image={product.image} />)
            }
        </div>
    )
}

export default ItemList
