import { Box, Grid } from "@mui/material";
import React from "react";

import postImage1 from "../../static/image1.jpeg"
import postImage3 from "../../static/image3.jpeg"
import cardImage from "../../static/image1.jpeg";
import Cards from "../cards/Cards";

const Recents = () => {
    return (
        <Box >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item>
                    <Cards cardImage={cardImage} />
                </Grid>

                <Grid item xs={12} md={6} >
                    <Cards cardImage={postImage3} />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Cards cardImage={postImage3} />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Cards cardImage={postImage1} />
                </Grid>
                <Grid item xs={12} md={6} >
                    <Cards cardImage={cardImage} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Recents;
