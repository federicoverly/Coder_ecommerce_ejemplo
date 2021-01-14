import React from 'react';
import "./ItemCount.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'


function ItemCount({ item, add, substract, agregarAlCarrito, counter, open }) {

    
    return (
        <div className="itemCount">
            <div className="itemCount__counter">
                <Button variant="contained" onClick={substract}>-</Button>
                    <h3>{counter}</h3>
                <Button variant="contained" onClick={add}>+</Button>
            </div>
            { /* Si open es false, que se muestre Agregar al Carrito, pero si es true, Terminar la compra*/}
            { !open ? (<div className="itemCount__agregar">
                <Button variant="contained" color="primary" onClick={ () => agregarAlCarrito(item)}>
                  <h3>Agregar al <ShoppingCartIcon /> </h3>
                </Button>
            </div>) : 
            (<Link to="/cart"><Button variant="contained" color="primary" >
            <h3>Terminar la compra</h3>
          </Button></Link>) }
            
        </div>
    )
}

export default ItemCount
