import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import NIM from "../../../lib/global";
import { registrationValidationSchema } from "./logic";
import useStyles from "./styles";
import { useToasts } from "react-toast-notifications";

/**
 *
 * @param {*} props
 * @returns
 */
const StudentRegistration = (props) => {
  const classes = useStyles();
  const toast = useToasts();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      regn: "",
    },
    validationSchema: registrationValidationSchema,
    onSubmit: (values) => {
      const { regn } = values;
      NIM.http(NIM.env.backendUrl + "/auth/student/verify", "POST", {
        regno: regn,
      })
        .then((res) => {
          const { message, success } = res.data;
          if (success) {
            toast.addToast(message, { appearance: "success" });
          } else {
            toast.addToast(message, { appearance: "error" });
          }
        })
        .catch((err) => {
          console.log(err.response.data);
          if (err.response?.data?.success === false) {
            toast.addToast(err.response?.data?.message, {
              appearance: "error",
              autoDismiss: true,
            });
          } else {
            toast.addToast("Unknown Error", {
              appearance: "error",
            });
          }
        })
        .finally(() => {});
    },
  });

  const handleGotoLogin = (e) => {
    e.preventDefault();
    navigate("/student/login");
  };
  return (
    <div style={{ padding: "8px" }}>
      <br />
      <Grid
        container
        spacing={1}
        justifyContent={"space-around"}
        direction="row"
      >
        <Grid xs={11} md={6} item>
          <Box className={classes.root}>
            <Grid container direction="column">
              <Grid item>
                <Typography className={classes.topBar}>
                  Candidate Registration
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.form}>
                  <Button
                    onClick={handleGotoLogin}
                    fullWidth
                    variant="contained"
                    color="success"
                  >
                    Candidate Login
                  </Button>
                  <br />
                  <br />
                  <Box className={classes.info}>
                    <ul>
                      <li>
                        Candidate can only register for seat allocation through
                        the email-id provided during registration process.
                      </li>
                      <li>
                        After filling this form, candidate will recieve a link
                        in their email inbox with further registration details.
                      </li>
                    </ul>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={11} md={6} item>
          <Box className={classes.root}>
            <Grid container direction="column">
              <Grid item>
                <Typography className={classes.topBar}>Registration</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.form}>
                  <form onSubmit={formik.handleSubmit}>
                    <Grid container alignItems={"center"} direction="row">
                      <Grid xs={3} item>
                        <Typography>Registration Number:</Typography>
                      </Grid>
                      <Grid xs={9} item>
                        <TextField
                          fullWidth
                          name="regn"
                          value={formik.values.regn}
                          onChange={formik.handleChange}
                          error={formik.errors.regn ? true : false}
                          helperText={formik.errors.regn}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    <Grid
                      container
                      justifyContent={"center"}
                      alignItems={"center"}
                      direction="row"
                    >
                      <Grid item>
                        <Button
                          type="submit"
                          variant="contained"
                          color="success"
                        >
                          Register
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentRegistration;
