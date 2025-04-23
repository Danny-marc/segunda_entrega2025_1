import React, { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import './CustomCard.css';

const CustomCard = (props) => {
 
  return (
    <Card id="estilo" sx={{ maxWidth: 345 }} onClick={toggleDetalles} style={{ cursor: 'pointer' }}>
      <CardActionArea>
        <div id="imagen-fondo">
          <CardMedia
            component="img"
            image={props.img}
            alt={props.name}
          />
        </div>
        <CardContent>
          <div id="inpersonaje">
            <Typography variant="h6" id="nombre">
              {props.name}
            </Typography>
            <Typography className="dimecion">
              {props.genero} - {props.raza}
            </Typography>

          
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
