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

            <Box sx={{ border: "2px solid pink" }} padding={2}>

                {/* Frontend */}
                <Box sx={{ textAlign: "center", border: "2px solid pink" }}  >
                    <Typography variant='h5'>Frontend </Typography>

                    <Box marginTop={1} padding={2}>
                        <Typography>
                            JavaScript, ReactJS, HTML5, CSS, Material UI, Tailwind, BootStrap, Figma.
                        </Typography>
                    </Box>

                </Box>

                {/* Backend */}
                <Box sx={{ textAlign: "center", border: "2px solid pink" }}  >
                    <Typography variant='h5'>Backend </Typography>

                    <Box marginTop={1} padding={2}>
                        <Typography>
                            Java, SpringBoot, NodeJS, ExpressJS, PHP, MySQL, MongoDB, Firebase,
                        </Typography>
                    </Box>

                </Box>

                {/* Tools and Platform */}
                <Box sx={{ textAlign: "center", border: "2px solid pink" }}  >
                    <Typography variant='h5'>Tools and Platform </Typography>

                    <Box marginTop={1} padding={2}>
                        <Typography>
                            AWS, GitHub, Docker, Jira, Postman, Visual Studio.
                        </Typography>
                    </Box>


                </Box>
            </Box>

        </Layout>
    );
}

export default Home
