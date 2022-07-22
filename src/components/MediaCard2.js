import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OldPortfolio from '../Assets/OldPortfolio.jpg'

export default function MediaCard2() {
    return (

        <Card sx={{ width: "75%" }} className="Card">

            <CardMedia
                component="img"

                image={OldPortfolio}
                alt="thumbnail-project2"

            />

            <CardActions>
                <Button size="small" onClick={event => window.location.href = 'https://kennethcochran10.github.io/Portfolio/'} style={{ color: "white", backgroundColor: "#e8934d" }}>View</Button>
                First edition portfolio
            </CardActions>
        </Card>
    );
}