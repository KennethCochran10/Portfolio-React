import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Nasa from '../Assets/Nasa.jpg'
import JobTracker from '../Assets/JobTracker.PNG'

export default function MediaCard3() {
    return (

        <Card sx={{ width: "75%" }} className="Card">

            <CardMedia
                component="img"
                height="75%vh"
                width="50%vw"
                image={JobTracker}
                alt="insert-pic"

            />

            <CardActions>
                <Button size="small" onClick={event => window.location.href = 'https://kwc-red-badge-client.herokuapp.com/'} style={{ color: "White", backgroundColor: "#e8934d" }}>View</Button>
                Full CRUD on 2 tables
            </CardActions>
        </Card>
    );
}