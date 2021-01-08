import { useState, useEffect } from 'react';
import './App.css';
import ItemListContainer from './ItemListContainer';
import Navbar from './Navbar';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import ItemDetailContainer from './ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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

function App() {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve(products); 
      }, 2000);
    }
    )
    promesa.then( result => setItems(result)) 
    promesa.catch( err => console.log("Algo salio mal")) 

  }, []);


  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Aguante el Age" products={items} />
          </Route>
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
