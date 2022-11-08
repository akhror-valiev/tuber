import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import detailsImage from "../../static/detailsImage.jpg";
import postImage from "../../static/image3.jpeg";

const Details = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${detailsImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "250px",
                }}
            >
                <Typography
                    align="center"
                    color={"black"}
                    variant="h2"
                    sx={{
                        fontWeight: 900,
                        padding: 10,
                    }}
                >
                    Clicked Post Title
                </Typography>
            </Box>
            <Container>
                <hr />
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 8 }}
                    mt={8}
                >
                    <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
                        <Typography
                            m={4}
                            align="center"
                            color={"gray"}
                            variant="body1"
                            sx={{ fontWeight: 900 }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Similique expedita minus explicabo quo dolorem atque, voluptatum
                            rem sed dignissi
                        </Typography>
                        <CardMedia
                            component="img"
                            height="300px"
                            image={postImage}
                            alt="photo"
                        />
                        <Typography align="center" variant="h4" mt={2}>
                            wait for it
                        </Typography>
                        <Typography m={4} color={"gray"} variant="body1" sx={{ fontWeight: 900 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, culpa
                            commodi. Minima saepe magni numquam deleniti hic esse mollitia,
                            perspiciatis sunt perferendis, sequi voluptate illum qui, ratione
                            enim quia neque.
                        </Typography>

                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default Details;
