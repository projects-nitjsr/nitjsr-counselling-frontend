import React from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Container,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";

import {
  Home,
  LocationCity,
  CalendarMonth,
  Info,
  Send,
  LiveHelp,
  PhoneEnabled,
  Logout,
  Menu as MenuIcon,
} from "@mui/icons-material";

const pages = [
  {
    id: 1,
    page: "Home",
    img: <Home />,
    link: "",
  },
  {
    id: 2,
    page: "Participating NITS",
    img: <LocationCity />,
    link: "",
  },
  {
    id: 3,
    page: "Important Dates(Revised)",
    img: <CalendarMonth />,
    link: "",
  },
  {
    id: 4,
    page: "Information Brochure(Ammended)",
    img: <Info />,
    link: "",
  },
  {
    id: 5,
    page: "Seat Matrix",
    img: <Send />,
    link: "",
  },
  {
    id: 6,
    page: "FAQ",
    img: <LiveHelp />,
    link: "",
  },
  {
    id: 7,
    page: "Contact Us",
    img: <PhoneEnabled />,
    link: "",
  },
  {
    id: 8,
    page: "Sign Out",
    img: <Logout />,
    link: "",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#343A40", marginTop: "-0.5px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page.link} key={page.id}>
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <i>{page.img}</i>
                    <Typography textAlign="center">{page.page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.link} key={page.id}>
                <Button
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    color: "white",
                    display: "block",
                   
                  }}
                >
                  <i>{page.img}</i>
                  <br />
                  {page.page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
