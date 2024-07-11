import React from 'react'
import { Card, CardMedia, CardActions, CardContent, Typography, Button } from '@mui/material'

const Cards = ({ image, title, site, github, desc }) => {

    const spanStyle = {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '00ffff'
    };

    const [hovered, setHovered] = React.useState(false);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    return (
        <Card
            sx={{
                maxWidth: 500,
                minWidth: 300,
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease',
                },
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <CardMedia
                sx={{ height: 200, width: '100%' }}
                image={image}
                title="Card Image"
            />
            <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                <Typography color="white" variant="h5" component="div">
                    {title}
                </Typography>
                {hovered && (
                    <Typography color="white" variant="body2" sx={{ mt: 2 }}>
                        <span style={spanStyle} > Tech Used </span> &nbsp;: &nbsp; {desc}
                    </Typography>
                )}
            </CardContent>
            <CardActions sx={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
                <a href={site} target="_blank" rel="noopener noreferrer">
                    <Button variant="contained" size="small">
                        Open
                    </Button>
                </a>
                <Button variant="contained" size="small">
                    Github
                </Button>
            </CardActions>
        </Card>
    );

    // return (
    //     <Card sx={{ maxWidth: 500, minWidth: 400, background: "transparent" }} >
    //         <CardMedia
    //             sx={{ height: 200 }}
    //             image={image}
    //             title="green iguana"
    //         />
    //         <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
    //             <Typography color={'white'} variant="h5" component="div">
    //                 {title}
    //             </Typography>
    //         </CardContent>
    //         <CardActions sx={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>

    //             <a href={site} target="_blank" rel="noopener noreferrer">
    //                 <Button variant='contained' size="small">Open</Button>
    //             </a>
    //             <Button variant="contained" size="small">Github</Button>
    //         </CardActions>
    //     </Card>
    // );
}

export default Cards

