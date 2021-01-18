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

function ItemDetail( { item, id, name, image, description, stock, initial, price }) {
    const classes = useStyles();

    // Este estado lo voy a usar para ir chequeando la cantidad de productos
    const [ counter, setCounter ] = useState(initial)

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
            item={item} counter={counter}  id={id}/>
          </div>
        </div>
    )
}

export default ItemDetail 
