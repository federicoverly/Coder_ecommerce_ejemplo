import React, { useState, useEffect } from 'react'

// Preparo el contexto
export const CartContext = React.createContext();

function CartProvider( { children }) {
    // Preparo el estado de mi carrito. Acá voy a guardar cada vez que alguien guarde algo nuevo
    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState()

    // Cada vez que se modifique el carrito corro el total nuevamente
    useEffect(() => {
        var t = 0
        // Con el map obtengo el total por producto
        const totals = cart.map( p => p.price * p.amount)
        // Sumo a t el total por producto de cada uno
        totals.map( p => t = t + p)
        // Lo guardo en el estado
        setTotal(t)
        // Calculo la cantidad de productos
        const cartQuantity = cart.length
        // Las guardo en el estado
        setQuantity(cartQuantity)
    }, [cart])

    // Traigo las funciones para modificar el carrito

    // Función para ver si el producto está en el carrito
    function isInCart(id){
        const item = cart.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }

    function addToCart(product, counter, id) {
         
        // Si el producto está en el carrito, le agrego la cantidad, no un producto nuevo
        if (isInCart(id)){
            // Encuentro el producto 
            const oldProduct = cart.find(p => p.id === id)
            // Armo la nueva cantidad de productos
            const newQuantity = oldProduct.amount + counter           
            // Armo el nuevo producto cambiandole la cantidad
            const newProduct = { id: oldProduct.id, name: oldProduct.name, image: oldProduct.image, price: oldProduct.price, amount: newQuantity}
            // Elimino el antiguo producto para no tener duplicados
            const cartWithoutOld = cart.filter(product => product.id =! id)
            // Agrego el nuevo producto
            const cartWithNew = [...cartWithoutOld, newProduct]
            // Guardo en el estado el nuevo listado
            setCart(cartWithNew)            
        } else {
            // Guardo en el estado cart el producto que eligió y la cantidad
            const newItem = { id: product.id, name: product.name, image: product.image, price: product.price, amount: counter }
            setCart([...cart, newItem]) 
        }
    }

    function eliminateFromCart(id){
        // Elimino el producto por Id filtrando y quedandome con todos los que no tienen el id seleccionado
        const newCart = cart.filter(product => product.id !== id)
        // Guardo el nuevo carrito
        setCart(newCart)
    }

    function clearCart(){
        // Guardo como estado un array vacío
        setCart([])
        setQuantity(0)
    }

    // Envuelvo children, que va a ser cualquier componente que le pase, dentro de mi provider
    return (
     
            <CartContext.Provider value ={{ cart, quantity, total, addToCart, eliminateFromCart, clearCart }}>
                { children }
            </CartContext.Provider>
    )
}

export default CartProvider;
