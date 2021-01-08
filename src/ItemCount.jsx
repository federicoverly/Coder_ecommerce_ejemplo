import React , { useState } from 'react';
import "./ItemCount.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';


function ItemCount({ initial, stock }) {
    const [ counter, setCounter ] = useState(initial)

    function add(){
        if (counter < stock ){
            setCounter(counter+1)
        }
    }

    function substract() {
        if (counter > initial ){
            setCounter(counter-1)
        }
    }

    function agregarAlCarrito() {
        console.log("Estas agregando " + counter + " al carrito")
    }
    
    return (
        <div className="itemCount">
            <div className="itemCount__counter">
                <Button variant="contained" onClick={substract}>-</Button>
                    <h3>{counter}</h3>
                <Button variant="contained" onClick={add}>+</Button>
            </div>
            <div className="itemCount__agregar">
                <Button variant="contained" color="primary" onClick={agregarAlCarrito}>
                  <h3>Agregar al <ShoppingCartIcon /> </h3>
                </Button>
            </div>
        </div>
    )
}

export default ItemCount
