import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import './CustomCard1.css'

const CustomCard1 = (props) => {
    return (
        <Card id="estiloinformacion" sx={{ maxWidth: 345 }}>
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
                        <Typography className="dimecion">
                            {props.poder}
                        </Typography>
                        <Typography className="dimecion">
                            {props.totalpoder}
                        </Typography>
                        <Typography className="dimecion">
                            {props.afiliacion}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CustomCard1