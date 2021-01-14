import React from 'react';
import './Item.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Item({ id, name, image }) {
    const classes = useStyles();

    // Con los datos que me envía ItemList voy a mostrar el item.
    return (
        <div className="item">
             <Card className={classes.root}>
                 <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        className={classes.media}
                        image={image}
                        title={name}
                   />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <Link to={"/item/" + id}> Learn More</Link>
        </Button>
      </CardActions>
    </Card>
        </div>
    )
}

export default Item
