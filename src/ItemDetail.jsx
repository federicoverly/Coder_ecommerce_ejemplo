import React from 'react';
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

function ItemDetail( { name, image, description, stock, initial, price }) {
    const classes = useStyles();


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
            <ItemCount initial={initial} stock={stock} />
          </div>
        </div>
    )
}

export default ItemDetail 
