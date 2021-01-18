import React, { useContext } from 'react';
import './CartItem.css';
import { CartContext } from './CartContext'
import { Button } from '@material-ui/core';

function CartItem( { id, name, image, price, amount }) {
    const { eliminateFromCart } = useContext(CartContext)

    return (
        <div className="cartItem">
            <div className="cartItem__title">
                <h3>{name}</h3>
            </div>
            <div className="cartItem__image">
                <img src={image} alt={name} />
            </div>
            <div className="cartItem__price">
                <h3>${price}</h3>
            </div>
            <div className="cartItem__amount">
                <h3>{amount}</h3>
            </div>
            <div className="cartItem__parcial">
                <h3>${amount*price}</h3>
            </div>
            <Button onClick={ () => eliminateFromCart(id)} variant="contained" color="primary">
                Eliminar
            </Button>
        </div>
    )
}

export default CartItem
