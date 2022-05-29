import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { forgotAPICall, registrationValidationSchema } from "./logic";
import useStyles from "./styles";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";

/**
 *
 * @param {*} props
 * @returns
 */
const AdminForgotPassword = (props) => {
  const classes = useStyles();
  const toast = useToasts();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: registrationValidationSchema,
    onSubmit: (values) => {
      setSubmitting(true);
      forgotAPICall(values)
        .then((res) => {
          const { error, message } = res;
          error?.forEach((err) => toast.addToast(err, { appearance: "error" }));
          message?.forEach((err) =>
            toast.addToast(err, { appearance: "success" })
          );
          setSubmitting(false);
          navigate("/admin/login");
        })
        .catch((err) => {
          setSubmitting(false);
          console.log(err);
          toast.addToast("Something went wrong", { appearance: "error" });
        });
    },
  });

  const handleGotoLogin = (e) => {
    e.preventDefault();
    navigate("/admin/login");
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
                  Forgot Password
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
                    Admin Login
                  </Button>
                  <br />
                  <br />
                  <Box className={classes.info}>
                    <ul>
                      <li>
                        The Admin should provide the email address that was gave
                        to him/her.
                      </li>
                      <li>
                        After filling this form, you will recieve a link in
                        their email inbox with further password recovery
                        details.
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
                <Typography className={classes.topBar}>
                  Forgot Password
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.form}>
                  <form onSubmit={formik.handleSubmit}>
                    <Grid container alignItems={"center"} direction="row">
                      <Grid xs={3} item>
                        <Typography>Email:</Typography>
                      </Grid>
                      <Grid xs={9} item>
                        <TextField
                          fullWidth
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={formik.errors.email ? true : false}
                          helperText={formik.errors.email}
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
                          disabled={submitting}
                          type="submit"
                          variant="contained"
                          color="success"
                        >
                          Submit
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

export default AdminForgotPassword;
