import { Box, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import applicationForm from "../../../assets/image/application-form.png";
import docUpload from "../../../assets/image/doc-upload.png";
import payment from "../../../assets/image/credit-card.png";
import formDownload from "../../../assets/image/file-download.png";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const navigateHandler = (name) => (e) => {
    navigate(`/student/${name}`);
  };

  return (
    <Box className={classes.root}>
      <Grid justifyContent={"center"} direction="column">
        <Grid item>
          <Box className={classes.bar}>
            <Typography>Dashboard</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box className={classes.cardsOuter}>
            <Grid
              container
              spacing={2}
              justifyContent="space-around"
              direction="row"
            >
              <Grid xs={6} md={2} item>
                <Box onClick={navigateHandler("application-form")} className={classes.cardsInter}>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <Grid container direction="row" justifyContent="center">
                        <Grid item>
                          <img src={applicationForm} alt="application form" />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography align="center">Application Form</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid xs={6} md={2} item>
                <Box className={classes.cardsInter}>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <Grid container direction="row" justifyContent="center">
                        <Grid item>
                          <img src={docUpload} alt="application form" />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography align="center">Document Upload</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid xs={6} md={2} item>
                <Box className={classes.cardsInter}>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <Grid container direction="row" justifyContent="center">
                        <Grid item>
                          <img src={payment} alt="application form" />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography align="center">Payment</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid xs={6} md={2} item>
                <Box className={classes.cardsInter}>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <Grid container direction="row" justifyContent="center">
                        <Grid item>
                          <img src={formDownload} alt="application form" />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography align="center">Download Form</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
