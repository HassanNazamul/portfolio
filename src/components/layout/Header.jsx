import { AppBar, Button, Box, Toolbar, Typography, IconButton, Drawer, Tabs, Tab } from '@mui/material';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CV from "../../assets/mohammedResume.pdf"
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../styles/HeaderStyle.css"

const Header = () => {

    //variable to toggle drawer
    const [drawOpen, setDrawOpen] = useState(false);

    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);  // Updates the state asynchronously
    };


    const handleOpenDraw = () => {
        setDrawOpen(!drawOpen);
    }

    //inside drawer all navigation link
    const drawer = (
        <Box
            sx={{
                width: 150, // Adjust width as needed
                paddingTop: 2, // Optional: Add padding for better spacing
            }}
        >
            <Tabs
                value={value}
                onClick={handleChange}
                orientation="vertical"
                textColor="secondary"
                indicatorColor="secondary"
            >
                <Tab value="one" label="Home" component={Link} to={"/"} />
                <Tab value="two" label="Projects" component={Link} to={"/project"} />
                <Button
                    style={{ borderColor: "#00ffff", color: '#00ffff' }}
                    size="large" variant='outlined' href={CV}>
                    View CV
                </Button>
            </Tabs>
        </Box>
    )

    return (


        <Box >

            <AppBar
                component={'nav'}
                position="static"
                sx={{
                    backgroundColor: "transparent"
                }}
            >
                <Toolbar>

                    {/* Logo name */}
                    <Typography
                        flexGrow={1}
                        component={"div"}
                        variant="h5"
                    >
                        <span>Mohammed's</span> Portfolio
                    </Typography>

                    {/* this button visible only in mobile view */}
                    <IconButton
                        color="inherit"
                        aria-label='open-drawer'
                        edge="end"
                        sx={{ display: { sm: "none", xs: "block" } }}
                        onClick={handleOpenDraw}
                    >
                        <MenuRoundedIcon />
                    </IconButton>

                    {/* this is visible in wide screen view only */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            TabIndicatorProps={{
                                style: { display: "none" }
                            }}
                        >
                            <Tab style={{ color: "white" }} value="one" label="Home" component={Link} to={"/"} />

                            <Tab style={{ color: "white" }} value="two" label="Projects" component={Link} to={"/project"} />

                            <Button
                                style={{ borderColor: "#00ffff", color: '#00ffff' }}
                                size="large" variant='outlined' target='_blank' href={CV}>
                                View CV
                            </Button>
                        </Tabs>
                    </Box>

                </Toolbar >
            </AppBar >

            {/* When Drwaer opens this get triggered */}
            <Drawer
                open={drawOpen}
                variant='temporary'
                onClose={() => (setDrawOpen(!drawOpen))}
                anchor='right'
                sx={{ backgroundColor: "transparent" }}
            >
                {drawer}
            </Drawer>

            <Toolbar />
        </Box >
    );
}

export default Header
