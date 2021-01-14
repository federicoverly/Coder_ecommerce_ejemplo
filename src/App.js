import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './ItemListContainer';
import Navbar from './Navbar';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Preparo mi listado de productos. Esto lo podría tener en un archivo aparte también. 
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

function App() {
  // Este useState lo voy a usar para guardar el resultado de la promesa
  const [ items, setItems ] = useState([])

  // Con el useEffect me aseguro que la promesa corra cuando se renderea el componente
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


  return (
    <div className="app">
      { /* Toda la app la envuelvo en BrowserRouter */}
      <BrowserRouter>

        { /* Navbar la dejo fuera del Switch porque quiero que siempre esté, sin importar la ruta */}
        <Navbar />

        <Switch>

          { /* Importante usar el exact path para no tener problemas */}

          <Route exact path="/">
            <ItemListContainer greeting="Aguante el Age" products={items} />
          </Route>

          { /* Para poder navegar con parámetros necesito usar el ":" */}

          <Route exact path="/category/:id">
            <ItemListContainer greeting="Aguante el Age" products={items} />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

//      
