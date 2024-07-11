import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, Tabs, Tab } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyle.css"

const Header = () => {

    const [drawOpen, setDrawOpen] = useState(false);

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value);
    };


    const handleOpenDraw = () => {
        setDrawOpen(!drawOpen);
    }

    const drawer = (
        <Box
            sx={{
                width: 150, // Adjust width as needed
                paddingTop: 2, // Optional: Add padding for better spacing
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab value="one" label="Home" component={Link} to={"/"} />
                <Tab value="two" label="Projects" component={Link} to={"/project"} />
                <Tab value="three" label="Resume" component={Link} to={"/resume"} />
            </Tabs>
        </Box>
    )

    return (

        <Box >

            <AppBar
                component={'nav'}
                position="fixed"
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
            >
                <Toolbar>
                    <Typography
                        flexGrow={1}
                        component={"div"}
                        variant="h5"
                    >
                        <span>Mohammed's</span> Portfolio
                    </Typography>


                    <IconButton
                        color="inherit"
                        aria-label='open-drawer'
                        edge="end"
                        sx={{ display: { sm: "none", xs: "block" } }}
                        onClick={handleOpenDraw}
                    >
                        <MenuRoundedIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value="one" label="Home" component={Link}
                                to="/" sx={{ color: 'white' }}>
                            </Tab>
                            <Tab value="two" label="Projects" component={Link}
                                to="/project" sx={{ color: 'white' }}>

                            </Tab>
                            <Tab value="three" label="Resume" component={Link}
                                to="/resume" sx={{ color: 'white' }}>
                            </Tab>

                        </Tabs>
                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer
                open={drawOpen}
                variant='temporary'
                onClose={() => (setDrawOpen(!drawOpen))}
                anchor='right'
            >
                {drawer}
            </Drawer>

            <Toolbar />
        </Box>
    );
}

export default Header
