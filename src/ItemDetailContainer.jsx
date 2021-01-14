import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const products = [{
  id: 1,
  name: "Infantería",
  price: "10",
  image: image1,
  description: "Alto soldado",
  stock: 3,
  initial: 1,
  categoryId: "infanteria",
},{
  id: 2,
  name: "Arquero",
  price: "20",
  image: image2,
  description: "Alto Arquero",
  stock: 5,
  initial: 2,
  categoryId: "arqueria",
},{
  id: 3,
  name: "Caballería",
  price: "30",
  image: image3,
  description: "Alto Caballero",
  stock: 6,
  initial: 1,
  categoryId: "caballeria",
}
]

function ItemDetailContainer() {
    // Una lógica muy similar a ItemListContainer. Voy a usar este estado para guardar el item
    const [ item, setItem ] = useState()

    // el useParams me va a permitir leer la url y tomar el id que está después de items/
    const { id } = useParams()

    useEffect(() => {
        // Esta promesa en dos segundos me va a devolver 1 solo producto
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            // Con esta lógica busco en la lista de productos el que comparta el id con el useParams
            const i = products.find(product => product.id == id)
            resolve(i); 
        }, 2000);
        }
        )
        // Ese producto lo guardo en mi estado
        promesa.then(result => setItem(result)) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);

    return (
        <div className="itemDetailContainer">
           { /* Los datos del item los envío al componente ItemDetail para que los muestre */ }
           
            { item ?
            <ItemDetail
             item={item}
             id={item.id}
             name={item.name}     
             price={item.price}
             image={item.image}
             description={item.description}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Loading</h2>}
        </div>
    )
}

export default ItemDetailContainer
