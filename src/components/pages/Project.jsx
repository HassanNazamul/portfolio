import React from 'react'
import Layout from '../layout/Layout'
import Cards from '../commons/Cards';
import { Box, Grid } from '@mui/material';
import weatherImg from '../../assets/weather.png'
import loginImg from '../../assets/login.png'
import ticImg from '../../assets/tic.png'
import codePenImg from '../../assets/codepen.png'



const cardData = [
    {
        imageUrl: weatherImg,
        title: 'Waether Forecast',
        description: ' React, OpenWeather API, Rapid API',
        github: "",
        open: "https://hassannazamul.github.io/weather/"
    },
    {
        imageUrl: loginImg,
        title: 'Registration',
        github: "",
        open: "https://hassannazamul.github.io/authentication-react-firebase/"
    },
    {
        imageUrl: ticImg,
        title: 'Tic Tac Toe',
        github: "",
        open: "https://hassannazamul.github.io/tic-tac-toe-game/"
    },
    {
        imageUrl: codePenImg,
        title: 'Code Pen Clone',
        github: "",
        open: "https://hassannazamul.github.io/code-pen-clone/"
    },
];

const Project = () => {
    return (
        <Layout>

            <Box padding={15}>
                <Grid container rowGap={5}>
                    {cardData.map((item) => (
                        <Grid key={item} item xs={12} sm={6} sx={{
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Cards image={item.imageUrl} title={item.title} github={item.github} site={item.open} desc={item.description} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Layout>
    );
}

export default Project
