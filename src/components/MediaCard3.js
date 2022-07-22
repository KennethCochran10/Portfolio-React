import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Nasa from '../Assets/Nasa.jpg'

export default function MediaCard3() {
    return (

        <Card sx={{ width: "75%" }} className="Card">

            <CardMedia
                component="img"
                width="100%"
                image={Nasa}
                alt="thumbnail-project2"

            />

            <CardActions>
                <Button size="small" onClick={event => window.location.href = 'https://kwc-test-page.firebaseapp.com/'} style={{ color: "white", backgroundColor: "#e8934d", }}>View</Button>
                A Nasa API pull
            </CardActions>
        </Card>
    );
}