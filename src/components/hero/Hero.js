import { Box, Typography } from "@mui/material";
import blogImage from "../../static/blogImage.jpg";

const Hero = () => {
    return (
        <Box>
            <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
                Mahalla<b style={{ color: "tomato" }}> Blog</b>
            </Typography>
            <Typography align="center" variant="body2" sx={{ fontWeight: 400 }}>
                We make shout louder to hear us!
            </Typography>
            <Box
                sx={{
                    backgroundImage: `url(${blogImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "black",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: 750,
                    width: "100%",
                    display: 'flex',
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: { xs: "100%", sm: "50%", md: "40%" }, padding: { xs: 3, sm: 2, md: 20 } }}>
                    <Box sx={{ background: "white", opacity: "0.6" }}>
                        <Typography variant={"h6"} color="red" align="center" pt={8}>
                            Trending Gossips
                        </Typography>
                        <Typography variant="h4" align="center">
                            Person's life is borring without gossip!
                        </Typography>
                        <Typography variant="body1" color="re d" align="center" pb={8}>
                            We love to talk over people
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
