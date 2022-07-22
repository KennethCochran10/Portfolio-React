import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import profile from '../components/profile.jpg'
import BasicChips from './BasicChips';
import IconGroup from './icons/icons';
import MediaCard from './MediaCard';
import MediaCard2 from './MediaCard2';
import MediaCard3 from './MediaCard3';
import MediaCard4 from './MediaCard4'
import Accordion from './Accordion';
import ContactForm from './ContactForm'
import { fontSize } from '@mui/system';
import SimplePaper from './Paper';
import { Button } from '@mui/material';
import CircularStatic from './Spedometer';
import CircularStatic2 from './Spedometer2';
import CircularStatic3 from './Spedometer3';
import CircularStatic4 from './Spedometer4';
import MediaCard5 from './MediaCard5'
import Logo from '../Assets/KCLogo.PNG'

var ReactRotatingText = require('react-rotating-text');


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (

        <Box sx={{ flexGrow: 1, }}>

            <div className='navBar' style={{ display: "flex", justifyContent: 'space-between' }}>

                <img src={Logo} className="logo" alt="update logo"></img>

                <div style={{ display: "flex", }} >
                    <a href='#profile-pic' className='homeButton' style={{ color: "white", backgroundColor: "#e8934d", }}> Home</a>
                    <a href='#scrollable-projects' className='projectsButton' style={{ color: "white", backgroundColor: "#e8934d", }}>Projects</a>
                    <a href='#Form' className='contactMeButton' style={{ color: "white", backgroundColor: "#e8934d", }}>Contact me</a>

                </div>

            </div>

            <br />

            <ReactRotatingText id='profile-pic' style={{ color: '#e8934d', fontSize: '90px', float: "left", padding: "10px" }} items={['Software Developer', 'Innovator', 'Father']} />

            <Grid container spacing={2} padding={2} style={{ maxHeight: "calc(100 % - 20px)" }}>

                <Grid item xs={6} className="About-me" >

                    <img src={profile} className="profile-pic" alt="this is profile image" />

                    <Paper style={{ height: "100vh", borderRadius: "10px", background: "#F4FFFD", }}> <p className='description' style={{
                        textAlign: "left", padding: "100px 30px",
                    }}> Hello, and welcome to my portfolio. Or as I like to think of it a snapshot into who I am. <p> I graduated from ElevenFiftyAcademy to be a Software Developer, studying HTML5, CSS, and React.</p> I have then in my own time learned briefly about typescript and redux. <p> My goal ultimately is to land a position at a company where my skills can be used and put to the test with an oppurtunity to learn from some of the best minds in the field.</p> <p>Some of my hobbies include: Playing games, eating :3, and watching movies.</p><p>I hope one day to achieve a power level over 9,000.</p></p> </Paper>
                    < BasicChips />

                </Grid>

                <Grid item xs={6} className="Other-side" >
                    <div className='confidence' >Confidence</div>
                    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "35px", marginBottom: "5%" }}>
                        <CircularStatic />
                        <CircularStatic2 />
                        <CircularStatic3 />
                        <CircularStatic4 />
                    </div>

                    <div className='scrollable-projects' id='scrollable-projects'>

                        <MediaCard />
                        <MediaCard2 />
                        <MediaCard3 />
                        <MediaCard4 />
                        <MediaCard5 />

                    </div>
                    <Accordion />

                </Grid>


            </Grid>

            <ContactForm />
            <p style={{ marginTop: "150px" }}>Connect with me @</p>
            <IconGroup />

        </Box >
    );
}


// <Button className='resumeButton' style={{ color: "white", backgroundColor: "#f49243", }}>download resume</Button>