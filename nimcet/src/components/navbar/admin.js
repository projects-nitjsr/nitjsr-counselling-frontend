import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

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
              <Grid item>&nbsp;</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
function Mobile(props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container direction="row" alignItems={"center"} spacing={1}>
          <Grid xs={2} item>
            <img
              height="48px"
              width="48px"
              src="https://nimcet.in/documents/Goldeneffect_1.png"
              alt="logo_nit_jsr"
            />
          </Grid>
          <Grid xs={10} item>
            <Grid container spacing={1} direction="column">
              <Grid item>&nbsp;</Grid>
              <Grid item>
                <Typography align="center">
                  NIMCET SEAT ALLOCATION PORTAL
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" fontSize={12}>
                  Admission and eCounselling for Session 2022
                </Typography>
              </Grid>
              <Grid item>&nbsp;</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

const AdminNav = {
  Desktop,Mobile
}

export default AdminNav;
