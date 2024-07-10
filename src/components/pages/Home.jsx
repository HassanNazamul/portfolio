import React from 'react'
import Layout from '../layout/Layout'
import { Box, Grid, Typography } from '@mui/material';



const Home = () => {
    return (
        <Layout>

            <Box style={{
                minHeight: '650px',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',

            }}>


                <Typography component="div" variant='h2'>Mohammed Nazamul Hassan</Typography>
                <Typography component="div" variant="subtitle1">Software Developer</Typography>


            </Box>

            {/* Frontend */}
            <Box sx={{ textAlign: "center", border: "2px solid pink" }}  >
                <Typography variant='h5'>Frontend </Typography>

                <Box marginTop={1}>

                    <Grid container spacing={2} justifyContent="center" alignItems="center" >
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>

                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>

                    </Grid>
                </Box>

            </Box>

            {/* Backend */}
            <Box sx={{ textAlign: "center", border: "2px solid pink" }}  >
                <Typography variant='h5'>Frontend </Typography>

                <Box marginTop={1}>

                    <Grid container spacing={2} justifyContent="center" alignItems="center" >
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>

                        </Grid>
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                            </div>
                        </Grid>

                    </Grid>
                </Box>

            </Box>

            {/* Tools and Platform */}
            <Box sx={{ textAlign: "center", border: "2px solid pink" }}  >
                <Typography variant='h5'>Tools and Platform </Typography>

                <Box marginTop={1}>

                    <Grid container spacing={2} justifyContent="center" alignItems="center" >

                        {/* AWS */}
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                            </div>
                        </Grid>

                        {/* github */}
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                            </div>
                        </Grid>

                        {/* docker */}
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
                            </div>
                        </Grid>

                        {/* jira */}
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
                            </div>
                        </Grid>
                        {/* vscode */}
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
                            </div>
                        </Grid>
                        {/* postman */}
                        <Grid item xs={2} sm={1}>
                            <div class="image">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                            </div>
                        </Grid>

                    </Grid>
                </Box>

            </Box>

        </Layout>
    );
}

export default Home
