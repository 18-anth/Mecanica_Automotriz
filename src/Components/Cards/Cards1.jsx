import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Cards1() {
    return (
      <Card sx={{ maxWidth: 345, flexDirection: 'column'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://th.bing.com/th/id/R.7a61d6d65668d369bda65ae1c9e89ff4?rik=vcu0myyc%2b8xLXQ&pid=ImgRaw&r=0"
            alt="Carburador"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Carburador
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
  
    );
  }
export default Cards1;