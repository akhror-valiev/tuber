import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import kidsImage from "../../static/kids.jpeg"
import womenImage from "../../static/women.jpg"
import menImage from "../../static/men.jpg"

const StyledBox = styled(Box)({
    height: 300,
    width: "100%",
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
});

const StyledTypography = styled(Typography)({
    margin: "25% 50px 25% 50px",
    background: "white",
    opacity: "0.6",
});

const Categories = () => {
    return (
        <Box>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={5}>
                <StyledBox sx={{ backgroundImage: `url(${kidsImage})` }}>
                    <StyledTypography align="center" variant="h3">
                        Bolalar
                    </StyledTypography>
                </StyledBox>
                <StyledBox sx={{ backgroundImage: `url(${womenImage})` }}>
                    <StyledTypography align="center" variant="h3">
                        Ayollar
                    </StyledTypography>
                </StyledBox>
                <StyledBox sx={{ backgroundImage: `url(${menImage})` }}>
                    <StyledTypography align="center" variant="h3">
                        Erkaklar
                    </StyledTypography>
                </StyledBox>
            </Stack>
        </Box >
    );
};

export default Categories;
