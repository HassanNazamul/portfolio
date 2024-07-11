import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import CV from "../../assets/Resume.pdf"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div>
            <Box padding={5} >
                <Grid container justifyContent={'center'} columnSpacing={4}>
                    <Grid item>
                        <Button
                            style={{ borderColor: "#00ffff", color: '#00ffff' }}
                            variant='outlined' size="large" href=''>
                            <LinkedInIcon />
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button
                            style={{ borderColor: "#00ffff", color: '#00ffff' }}
                            size="large" variant='outlined' href=''>
                            <GitHubIcon />
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            style={{ borderColor: "#00ffff", color: '#00ffff' }}
                            size="large" variant='outlined' href={CV}>
                            View CV
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Footer
