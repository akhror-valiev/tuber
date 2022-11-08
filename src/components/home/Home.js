import { Box, Container, Stack } from "@mui/material";

import React from "react";
import Categories from "../category/Categories";
import Hero from "../hero/Hero";
import Recents from "../recents/Recents";
import Rightbar from "../rightbar/Rightbar";

const Home = () => {
    return (
        <Box>
            <Hero />
            <Container>
                <Categories />
                <hr />
                <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={{ xs: 0, sm: 8, md: 8 }} mt={8}>
                    <Box
                        flex={3}

                        sx={{ padding: { xs: "0px", md: "18px 100px 100px 100px" } }}
                    >
                        <Recents />
                    </Box>
                    <Box flex={1}>
                        <Rightbar />
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Home;
