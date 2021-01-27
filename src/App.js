import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './ItemListContainer';
import Navbar from './Navbar';
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartProvider from './CartContext';
import Cart from './Cart';
import {firestore} from "./firebase"

// Preparo mi listado de productos. Esto lo podría tener en un archivo aparte también. 
/*
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
  name: "Arquería",
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
*/

function App() {
  // Este useState lo voy a usar para guardar el resultado de la promesa
  // const [ items, setItems ] = useState([])
  const [ fireItems, setFireItems ] = useState([])

  // Con el useEffect me aseguro que la promesa corra cuando se renderea el componente
  /*
  useEffect(() => {
    // Acá preparo mi promesa. Dentro de la promesa armo un setTimeout para simular 2 segundos.
    // Pasados esos dos segundos la promesa me devuelve products, el listado de arriba
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve(products); 
      }, 2000);
    }
    )
    // Para acceder al resultado de la promesa tengo que usar el .then, el .catch me sirve para agarrar
    // algún error si los hubiera.
    // El resultado de la promesa lo guardo en items con setItems.
    promesa.then( result => setItems(result)) 
    promesa.catch( err => console.log("Algo salio mal")) 

  }, []);
  */

  // En el useEffect hago el llamado a firebase para obtener y setear los productos
  useEffect(() => {
      const db = firestore
      const collection = db.collection('products')
      const query = collection.get()
      query
        .then((result) => {
          setFireItems(result.docs.map(p => ({id: p.id, ...p.data()})))
        })
        .catch((error) => {
          console.log(error)
        })
  }, [fireItems])

  return (
    <div className="app">
      
      { /* Envuelvo toda mi app en mi provider para poder tomar los datos en cualquier componente */}
      <CartProvider>

      { /* Toda la app la envuelvo en BrowserRouter */}
      <BrowserRouter>

        { /* Navbar la dejo fuera del Switch porque quiero que siempre esté, sin importar la ruta */}
        <Navbar />

        <Switch>

          { /* Importante usar el exact path para no tener problemas */}

          <Route exact path="/">
            <ItemListContainer greeting="Aguante el Age" products={fireItems} />
          </Route>

          { /* Para poder navegar con parámetros necesito usar el ":" */}

          <Route exact path="/category/:id">
            <ItemListContainer greeting="Aguante el Age" products={fireItems} />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>


      </Switch>
      </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App
