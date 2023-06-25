import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Cards2() {
    return (
      <Card sx={{ maxWidth: 345, flexDirection: 'column'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://th.bing.com/th/id/OIP.d_7Jyuo-QozFA7eCTRnfhQHaE9?pid=ImgDet&rs=1"
            alt="Carburador"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Aceite
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
export default Cards2;