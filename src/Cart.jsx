import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import './Cart.css';
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {firestore} from "./firebase";
import firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Cart() {
    // Traigo las funciones de Cart y de ClearCart del contexto
    const { cart, clearCart, total } = useContext(CartContext)
    // Uso este estado para mostrar el formulario
    const [ openPay, setOpenPay ] = useState(false)
    // Estos estados me van a servir para guardar la información del formulario
    const [ name, setName ] = useState("")
    const [ phone, setPhone ] = useState("")
    const [ email, setEmail ] = useState("")

    const classes = useStyles();

    // Función para enviar la orden a firebase
    function submitOrder(){

        
        const db = firestore
        const orders = db.collection('orders')

        const order = {
            buyer: { name: name, phone: phone, email: email},
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        }
        orders.add(order)
        .then(({ id }) => alert("Anotá el id de tu compra " + id))
        .catch((error) => console.log(error))
    }

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
                <Button onClick={() => {setOpenPay(true)}} variant="contained" color="primary">
                    A pagar! 
                </Button>
            </div>
            </>}

            { openPay && 
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" value={name} 
            onChange={(e) => setName(e.target.value)} />
            <TextField id="standard-basic" label="Telephone" value={phone} 
            onChange={(e) => setPhone(e.target.value)} />
            <TextField id="standard-basic" label="Email" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={submitOrder} variant="contained" color="primary">
                    Sí!
                </Button>
          </form>}


        </div>
    )
}

export default Cart
