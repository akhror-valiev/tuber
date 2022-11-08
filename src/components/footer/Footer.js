import { Box, SliderTrack, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import {
    Facebook,
    Instagram,
    Twitter,

} from "@mui/icons-material"


const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color: "white"
});

const Footer = () => {
    return (
        <Box sx={{ background: "black", height: "300px" }}>
            <Stack direction={{ xs: 'row', md: 'row' }} padding={{ xs: 2, md: 5 }} >
                <Box flex={1} >
                    <Typography color={"white"} align="center" fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>Contact Us</Typography>
                    <Typography color={"white"} align="center" fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>#333 Andijan region Uzbekistan</Typography>
                    <Typography color={"white"} align="center" fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>St Fisherman</Typography>

                </Box>
                <Box flex={1}>
                    <Typography color={"white"} align={"center"} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>
                        Data policy
                    </Typography>
                    <Typography color={"white"} align={"center"} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>
                        Cookies
                    </Typography>
                    <Typography color={"white"} align={"center"} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>
                        Data Safety
                    </Typography>

                </Box>
                <Box flex={1}>
                    <Typography color={"white"} align={"center"} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>
                        Categries
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>
                        Kids
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2 }}>
                        Women
                    </Typography>
                    <Typography color={"white"} variant={"body2"} align={"center"} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>
                        Men
                    </Typography>
                </Box>
                <Box>
                    <Typography color={"white"} align={"center"} mb={2} fontSize={{ xs: "14px", md: "16px" }} mb={{ xs: 2, md: 0 }}>
                        Follow Us
                    </Typography>
                    <SocialBox>
                        <Facebook />

                        <Instagram />
                        <Twitter />
                    </SocialBox>
                </Box>
            </Stack>
        </Box>
    )
}

export default Footer