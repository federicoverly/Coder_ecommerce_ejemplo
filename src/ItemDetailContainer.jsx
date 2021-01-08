import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const products = [{
  id: 1,
  nombre: "Infantería",
  precio: "10",
  imagen: image1,
  description: "Alto soldado",
  stock: 3,
  initial: 1,
  categoryId: "infanteria",
},{
  id: 2,
  nombre: "Arquero",
  precio: "20",
  imagen: image2,
  description: "Alto Arquero",
  stock: 5,
  initial: 2,
  categoryId: "arqueria",
},{
  id: 3,
  nombre: "Caballería",
  precio: "30",
  imagen: image3,
  description: "Alto Caballero",
  stock: 6,
  initial: 1,
  categoryId: "caballeria",
}
]

function ItemDetailContainer() {
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            console.log(i)
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then(result => setItem(result)) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);

    return (
        <div className="itemDetailContainer">
            { item ?
            <ItemDetail
             id={item.id}
             name={item.nombre}     
             price={item.precio}
             image={item.imagen}
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
