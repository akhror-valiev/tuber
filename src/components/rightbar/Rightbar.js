import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Box,
    Typography,
    Divider,

} from "@mui/material";
import React from "react";
import postImage from "../../static/image2.jpg";
import postImage1 from "../../static/image1.jpeg";
import postImage3 from "../../static/image3.jpeg";
import Cards from "../cards/Cards";




const Rightbar = () => {
    return (
        <Box >
            <Typography align="center" bgcolor={"darkgray"} color="white">
                Most Popular
            </Typography>
            <List
                sx={{
                    width: "100%",
                    height: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}

            >
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar

                            sx={{ width: 80, height: 80, marginRight: 1 }}
                            variant="square"
                            alt="Remy Sharp"
                            src={postImage}
                        />
                    </ListItemAvatar>
                    <ListItemText

                        secondary={" — I'll be in your neighborhood doing errands"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar
                            sx={{ width: 80, height: 80, marginRight: 1 }}
                            variant="square"
                            alt="Remy Sharp"
                            src={postImage3}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — I'll be in your neighborhood doing errands"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar
                            sx={{ width: 80, height: 80, marginRight: 1 }}
                            variant="square"
                            alt="Remy Sharp"
                            src={postImage1}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — I'll be in your neighborhood doing errands"}
                    />
                </ListItem>
                <Divider variant="insert" component={"li"} />
            </List>
            <Typography align="center" bgcolor={"darkgray"} color="white">
                About Us
            </Typography>
            <Cards cardImage={postImage3} />
        </Box>
    );
};

export default Rightbar;
