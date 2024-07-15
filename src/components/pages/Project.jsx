import React from 'react'
import Layout from '../layout/Layout'
import Cards from '../commons/Cards';
import { Box, Grid } from '@mui/material';
import weatherImg from '../../assets/weather.png'
import loginImg from '../../assets/login.png'
import ticImg from '../../assets/tic.png'
import codePenImg from '../../assets/codepen.png'


// all data of project listed here as json
const cardData = [
    {
        imageUrl: weatherImg,
        title: 'Waether Forecast',
        description: ' React, OpenWeather API, Rapid API',
        github: "https://github.com/HassanNazamul/weather",
        open: "https://hassannazamul.github.io/weather/"
    },
    {
        imageUrl: loginImg,
        title: 'Registration',
        description: ' React, Firebase, Rest API',
        github: "https://github.com/HassanNazamul/authentication-react-firebase",
        open: "https://hassannazamul.github.io/authentication-react-firebase/"
    },
    {
        imageUrl: ticImg,
        title: 'Tic Tac Toe',
        description: ' React, React Hooks',
        github: "https://github.com/HassanNazamul/tic-tac-toe-game",
        open: "https://hassannazamul.github.io/tic-tac-toe-game/"
    },
    {
        imageUrl: codePenImg,
        title: 'Code Pen Clone',
        description: ' JavaScript, Html, Css',
        github: "https://github.com/HassanNazamul/code-pen-clone",
        open: "https://hassannazamul.github.io/code-pen-clone/"
    },
];

const Project = () => {
    return (
        <Layout>

            <Box padding={15}>

                <Grid container rowGap={5}>
                    {/* mapping array of json object into indvidual cards */}
                    {cardData.map((item) => (
                        <Grid key={item.title} item xs={12} sm={6} sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            {/* this is custom card component */}
                            <Cards image={item.imageUrl} title={item.title} github={item.github} site={item.open} desc={item.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
}

export default Project
