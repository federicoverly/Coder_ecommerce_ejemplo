import React, { useState } from 'react';
import './ItemDetail.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function ItemDetail( { item, name, image, description, stock, initial, price }) {
    const classes = useStyles();

    // Este estado lo voy a usar para ir chequeando la cantidad de productos
    const [ counter, setCounter ] = useState(initial)

    // En este estado voy a guardar la información (producto y cantidad) cuando se cliquea "Agregar al Carrito"
    const [ cart, setCart ] = useState([])

    // Este estado me va a servir para manejar si debo mostrar el botón "Agregar al carrito" o "terminar compra"
    const [ open, setOpen ] = useState(false)

    // Si el contador es menor que el stock, cuando el usuario hace click agrego 1
    function add(){
        if (counter < stock ){
            setCounter(counter+1)
        }
    }

    // Si el contador es mayor que el inicial, cuando el usuario hace click le resto 1
    function substract() {
        if (counter > initial ){
            setCounter(counter-1)
        }
    }

    // Cuando el usuario agrega al carrito voy a hacer dos cosas
    function agregarAlCarrito(product) {
        console.log("Estas agregando " + counter + " al carrito")
        // Guardo en el estado cart el producto que eligió y la cantidad
        setCart(...cart, { id: product.id, name: product.name, image: product.image, amount: counter })
        
        // Guardo en el estado que open sea true para mostrar "Terminar Compra" en lugar de "Agregar al carrito"
        setOpen(true)
    }




    return (
        <div className="itemDetail">
             <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={name}
                  height="300"
                  image={image}
                  title={name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {description} por tan solo ${price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          <div className="itemDetail__counter">
            {/* Le paso a ItemCount todas las funciones y datos que necesita */}
            <ItemCount initial={initial} stock={stock} add={add} substract={substract}
            agregarAlCarrito={agregarAlCarrito} item={item} counter={counter} open={open}/>
          </div>
        </div>
    )
}

export default ItemDetail 
