import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { MenuBarLink } from "../link";
import { menuItem } from "../../assets/data/menuItems";
import { BiDotsVertical } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Desktop(props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid
          container
          direction="row"
          alignItems={"center"}
          spacing={2}
          justifyContent={"center"}
        >
          <Grid item>
            <img
              height="96px"
              width="96px"
              src="https://nimcet.in/documents/Goldeneffect_1.png"
              alt="logo_nit_jsr"
            />
          </Grid>
          <Grid item>
            <Grid container spacing={1} direction="column">
              <Grid item>&nbsp;</Grid>
              <Grid item>
                <Typography align="center" variant="h5">
                  NIMCET SEAT ALLOCATION PORTAL
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Admission and eCounselling for Session 2022
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Grid container justifyContent={"space-evenly"} direction={"row"}>
        {menuItem.map((it) => (
          <Grid md={2} key={it.path} item>
            <MenuBarLink to={it.path}>{it.text}</MenuBarLink>
          </Grid>
        ))}
      </Grid>
    </AppBar>
  );
}
function Mobile(props) {
  const navigate = useNavigate();
  const [anchor, setAnchor] = useState(null);
  const handleClose = (e) => {
    setAnchor(null);
  };
  const handleOpen = (e) => {
    setAnchor(e.currentTarget);
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
          >
            <Grid item>
              <img
                height="32px"
                width="32px"
                src="https://nimcet.in/documents/Goldeneffect_1.png"
                alt="logo_nit_jsr"
              />
            </Grid>
            <Grid item>
              <Grid container spacing={1} direction="column">
                <Grid item>&nbsp;</Grid>
                <Grid item>
                  <Typography align="center">
                    NIMCET SEAT ALLOCATION PORTAL
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography align="center" fontSize={12}>
                    Admission and eCounselling for Session 2021
                  </Typography>
                </Grid>
                <Grid item>&nbsp;</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <IconButton onClick={handleOpen}>
                <BiDotsVertical color="#fff" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Menu anchorEl={anchor} onClose={handleClose} open={Boolean(anchor)}>
        {menuItem.map((it) => (
          <MenuItem key={it.path} onClick={(e) => navigate(it.path)}>
            {it.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

const HomeNav = {
  Desktop,
  Mobile,
};

export default HomeNav;
