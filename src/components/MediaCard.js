import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import KastStatic from '../Assets/KastStatic.jpg'
import Typography from '@mui/material/Typography';
import { alignProperty } from '@mui/material/styles/cssUtils';

export default function MediaCard() {
    return (

        <Card sx={{ width: "75%", }} className="Card">

            <CardMedia
                component="img"
                height="75%vh"
                image={KastStatic}
                alt="thumbnail-project"

            />



            <CardActions onClick={event => window.location.href = 'https://kennethcochran10.github.io/StaticProject/'}>

                <Button size="small" style={{ color: "white", backgroundColor: "#e8934d", }} >View</Button>
                A Static Page of KastApp
            </CardActions>
        </Card >
    );
}