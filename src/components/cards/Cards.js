import { CardContent, CardMedia, Typography, Box, Link } from '@mui/material'

import React from 'react'


const Cards = ({ cardImage }) => {
    return (
        <Box>
            <Link href="http://localhost:3000/details" sx={{ textDecoration: "none" }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={cardImage}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" align="center" component="div" color={"tomato"}>
                        GOLD FISH
                    </Typography>

                    <Typography gutterBottom variant="h5" align="center" component="div">
                        Do you believe it?  to catch Gold Fish
                    </Typography>
                    <Typography gutterBottom variant="body2" align="center" component="div" color="text.secondary">
                        Waiting to catch own gold fish
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default Cards