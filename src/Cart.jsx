import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import './Cart.css';
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';



function Cart() {
    // Traigo las funciones de Cart y de ClearCart del contexto
    const { cart, clearCart, total } = useContext(CartContext)

    // Rendereo condicional para mostrar los productos o que vaya a comprar
    return (
        <div className="cart">
            { cart.length > 0 ? (
            <h1>Dale, compra!</h1>
            )    
            :
            ( <>
            <h1>Aún no elegiste tus productos</h1>
                <Link to={"/"}>
                <Button onClick={clearCart} variant="contained" color="primary">
                    Llevame a tus fantásticos productos
                </Button>
            </Link>
            </>)}

            <div className="cartItems">
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div className="cartItems__buttons">
                <Button onClick={clearCart} variant="contained" color="primary">
                    Saca todo del carrito che
                </Button>
                <Button onClick={() => {console.log(cart)}} variant="contained" color="primary">
                    A pagar! 
                </Button>
            </div>
            </>}


        </div>
    )
}

export default Cart
