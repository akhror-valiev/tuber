import { useState } from "react";
import {
    AppBar,
    Toolbar,
    styled,
    Box,
    Typography,
    InputBase,
    Menu,
    MenuItem,
} from "@mui/material";
import {
    Facebook,
    Instagram,
    Twitter,
    Menu as MenuIcon,
} from "@mui/icons-material/";

const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });

    const SocialBox = styled(Box)({
        display: "flex",
        gap: 10,
    });

    const MenuBox = styled(Box)({
        display: "flex",
        gap: 30,
    });

    const MenuItems = [
        { Name: "Home", Link: "/" },
        { Name: "Products", Link: "#" },
        { Name: "Portfolio", Link: "#" },

        { Name: "Blog", Link: "#" },
        { Name: "Contact Us", Link: "/contact" },
    ];

    const SearchBox = styled(Box)({
        display: "flex",
        gap: 5,
    });

    const [open, setOpen] = useState(false);

    return (
        <AppBar sx={{ background: "black" }} position={"static"}>
            <StyledToolbar>
                <SocialBox>
                    <Facebook />

                    <Instagram />
                    <Twitter />
                </SocialBox>
                <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                    {MenuItems.map((item) => (
                        <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
                            {item.Name}
                        </Typography>
                    ))}
                </MenuBox>

                <SearchBox>
                    <InputBase placeholder="Search..." sx={{ color: "white" }} />
                    <MenuIcon
                        sx={{
                            color: "white",
                            display: { xs: "block", sm: "block", md: "none" },
                        }}
                        onClick={() => setOpen(!open)}
                    />
                </SearchBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(!open)}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <Box sx={{ width: 250, height: "90vh" }}>
                    {MenuItems.map((item) => (
                        <MenuItem
                            sx={{
                                cursor: "pointer",
                                fontSize: "16px",
                                fontWeight: 500,
                                justifyContent: "center",
                            }}
                        >
                            {item.Name}
                        </MenuItem>
                    ))}
                </Box>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
