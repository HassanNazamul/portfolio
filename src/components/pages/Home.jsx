import React, { useEffect } from 'react'
import Layout from '../layout/Layout'
import Typed from 'typed.js';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import "../../styles/home.css";




const Home = () => {

    //for typing animation
    useEffect(() => {
        const typed = new Typed(".auto-input", {
            strings: ["Full Stack Developer", "Backend Java Developer", "Frontend Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy(); // Clean up on unmount
        };
    }, []);

    return (
        <Layout>

            {/* Name */}
            <Box style={{
                minHeight: '400px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',

            }}>


                <Typography variant='h2' style={{ fontWeight: 'bold' }}>Mohammed Nazamul Hassan</Typography>
                <h2 style={{ color: "white" }}>I'm a <span className="auto-input"></span></h2>
                <Typography textAlign={'center'} mt={4}>
                    A passionate developer and lifelong learner.
                </Typography>

            </Box>



            {/* SKills */}
            <Box padding={8}>
                <Grid container columnSpacing={3} rowGap={12}>

                    {/* FrontEnd */}
                    <Grid item sm={6} xs={12}>
                        <Box>
                            <Typography
                                variant='h2' mb={2} sx={{ textAlign: "center" }}>Frontend
                            </Typography>

                            <Card className='customCard' >
                                <CardContent >
                                    <Grid container rowSpacing={4} padding={2}>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Java Script</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>ReactJs</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Angular</Typography>
                                        </Grid>

                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>HTML5</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>CSS</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>BootStrap</Typography>
                                        </Grid>

                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Material UI</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Figma</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Photoshop</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                        </Box>
                    </Grid>
                    {/* Backend */}
                    <Grid item sm={6} xs={12}>
                        <Box>
                            <Typography
                                variant='h2' mb={2} sx={{ textAlign: "center" }}>Backend
                            </Typography>

                            <Card className='customCard' >
                                <CardContent >
                                    <Grid container rowSpacing={4} padding={2}>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Java</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Spring Boot</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>PHP</Typography>
                                        </Grid>

                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>NodeJs</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>ExpressJS</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>MySQL</Typography>
                                        </Grid>

                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}> MongoDB</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>Firebase</Typography>
                                        </Grid>
                                        <Grid item sm={4}>
                                            <Typography variant='h6' textAlign={'center'}>AWS</Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Experinec */}
            <Box padding={8}>
                <Grid container columnSpacing={3} rowGap={12}>

                    {/* <Experince>*/}
                    <Grid item sm={12} xs={12} >
                        <Box>
                            <Typography
                                variant='h2' mb={2} sx={{ textAlign: "center" }}>Co-op Experience
                            </Typography>

                            <Card className='customCard' >
                                <Box padding={4}>
                                    <CardContent >
                                        <Grid container justifyContent={'space-between'}>
                                            <Grid item >
                                                <Typography variant="h5">Jr. Software Developer</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1">Jan 2024 - April 2024</Typography>
                                            </Grid>
                                        </Grid>
                                        <Typography variant='subtitle1' mb={2}>SKill Squirrel</Typography>
                                        <ul style={{ color: "white" }}>

                                            <li>Led the development of implementing accessibility in adherence to W3C standards.</li>
                                            <li>Implemented Jest JUnit tests, achieving comprehensive code coverage and reducing deployment errors.</li>
                                            <li>Eliminate hardcoded values and redundant code, resulting in a more manageable codebase.</li>
                                            <li>Participated in weekly stand-up meetings with project updates and discussions</li>
                                        </ul>

                                    </CardContent>
                                </Box>
                            </Card>

                        </Box>
                    </Grid>

                    {/* Education */}
                    {/* <Grid item sm={12} xs={12}>
                        <Box>
                            <Typography variant='h2' mb={2} sx={{ textAlign: "center" }}>Education</Typography>
                        </Box>

                        <Card className='customCard'>
                            <Box padding={4}>
                                <CardContent >
                                    <Grid container justifyContent={'space-between'}>
                                        <Grid item >
                                            <Typography variant="h5">Software Development and Network Engineering</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">Jan 2023 - Dec 2025</Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography variant="subtitle1" mb={2}>
                                        Sheridan College
                                    </Typography>

                                    <ul style={{ color: "white" }}>
                                        <li>Implemented feature X using React and Redux.</li>
                                        <li>Developed REST APIs using Spring Boot.</li>
                                        <li>Collaborated in Agile sprints for project delivery.</li>
                                    </ul>

                                </CardContent>
                            </Box>
                        </Card>
                    </Grid> */}

                </Grid>
            </Box>
        </Layout>
    );
}

export default Home
