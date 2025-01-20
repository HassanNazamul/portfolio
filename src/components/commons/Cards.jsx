import React from 'react'
import { Card, CardMedia, CardActions, CardContent, Typography, Button } from '@mui/material'

const Cards = ({ image, title, site, github, desc }) => {

    // Style for the 'Tech Used' text
    const spanStyle = {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#00ffff', // Correct color code with the hash for hex color
    };

    // State to track whether the card is hovered or not
    const [hovered, setHovered] = React.useState(false);

    // Function to handle mouse enter (hover)
    const handleHover = () => {
        setHovered(true);
    };

    // Function to handle mouse leave (unhover)
    const handleLeave = () => {
        setHovered(false);
    };

    return (
        <Card
            // Card styles and hover effect
            sx={{
                maxWidth: 700, // Increased max width for better visual appearance
                minWidth: 400, // Increased min width for better layout control
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden',
                padding: '16px', // Padding for better spacing inside the card
                '&:hover': {
                    transform: 'scale(1.1)', // Scale effect on hover
                    transition: 'transform 0.3s ease', // Smooth transition effect
                },
            }}
            onMouseEnter={handleHover} // Trigger hover effect
            onMouseLeave={handleLeave} // Trigger unhover effect
        >
            <CardMedia
                sx={{ height: 280, width: '100%' }} // Set image height for proper display
                image={image}
                title="Card Image"
            />
            <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                <Typography color="white" variant="h5" component="div">
                    {title} {/* Display the project title */}
                </Typography>
                {hovered && (
                    <Typography color="white" variant="body2" sx={{ mt: 2 }}>
                        {/* Show description when card is hovered */}
                        <span style={spanStyle}> Tech Used </span> &nbsp;: &nbsp; {desc}
                    </Typography>
                )}
            </CardContent>

            <CardActions
                sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)', // Set background color for actions
                    justifyContent: 'space-between', // Distribute buttons evenly
                    padding: '8px 16px', // Add padding for balance in the action area
                }}
            >
                {/* Button to open the live project */}
                <a href={site} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="medium" sx={{ width: '45%' }}>
                        Open {/* Button label for the live site */}
                    </Button>
                </a>

                {/* Button to open the GitHub repository */}
                <a href={github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="medium" sx={{ width: '45%' }}>
                        Github {/* Button label for GitHub repository */}
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}

export default Cards;
