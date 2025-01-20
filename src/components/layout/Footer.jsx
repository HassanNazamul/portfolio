import { Box, Button, Grid } from '@mui/material'
import React from 'react'
import CV from "../../assets/Resume.pdf"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div>
            <Box padding={5} >
                {/* A MUI GRID parent container  */}
                <Grid container justifyContent={'center'} columnSpacing={4}>

                    {/* Linkedin Button */}
                    <Grid item>
                        <Button
                            style={{ borderColor: "#00ffff", color: '#00ffff' }}
                            variant='outlined' size="large" target='_blank' href='https://www.linkedin.com/in/mohammed-nazamul-hassan-28799525b/'>
                            <LinkedInIcon />
                        </Button>
                    </Grid>

                    {/* Github Button */}
                    <Grid item>
                        <Button
                            style={{ borderColor: "#00ffff", color: '#00ffff' }}
                            size="large" variant='outlined' target='_blank' href='https://github.com/HassanNazamul'>
                            <GitHubIcon />
                        </Button>
                    </Grid>

                    {/* View CV Button */}
                    <Grid item>
                        <Button
                            style={{ borderColor: "#00ffff", color: '#00ffff' }}
                            size="large" variant='outlined' target='_blank' href={CV}>
                            View CV
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        </div>
    )
}

export default Footer
