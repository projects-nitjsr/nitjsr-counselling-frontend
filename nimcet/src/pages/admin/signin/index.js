import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { SigninAPIcall, signupValidationSchema } from "./logic";
import useStyles from "./styles";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";

/**
 *
 * @param {*} props
 * @returns
 */
const AdminSignin = (props) => {
  const classes = useStyles();
  const toast = useToasts();
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      eamail: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      setSubmitting(true);
      const { password, email } = values;
      SigninAPIcall({ password, email })
        .then((res) => {
          const { error, message } = res;
          error?.forEach((err) => toast.addToast(err, { appearance: "error" }));
          message?.forEach((err) =>
            toast.addToast(err, { appearance: "success" })
          );
          setSubmitting(false);
          if (error?.length === 0) {
            navigate("/admin/dashboard");
          }
        })
        .catch((err) => {
          setSubmitting(false);
          toast.addToast("Something went wrong", { appearance: "error" });
        });
    },
  });
  const handleGotoLogin = (e) => {
    e.preventDefault();
    navigate("/admin/forgot-password");
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
                <Typography className={classes.topBar}>Admin Login</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.form}>
                  <Button
                    onClick={handleGotoLogin}
                    fullWidth
                    variant="contained"
                    color="success"
                  >
                    Forgot Password
                  </Button>
                  <br />
                  <br />
                  <Box className={classes.info}>
                    <ul>
                      <li>
                        The admin can reset his/her password in case he/she
                        forgets the password.
                      </li>
                      <li>
                        The password should contain at least one uppercase (A-Z)
                      </li>
                      <li>
                        The password should contain at least one lowercase (a-z)
                      </li>
                      <li>
                        The password should contain at least one number (0-9)
                      </li>
                      <li>
                        The password should contain at least one special
                        character ({"$&+,:;=?@#|'<>.^*()%!-"})
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
                <Typography className={classes.topBar}>Login</Typography>
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
                          type="email"
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
                    <Grid container alignItems={"center"} direction="row">
                      <Grid xs={3} item>
                        <Typography>Password:</Typography>
                      </Grid>
                      <Grid xs={9} item>
                        <TextField
                          fullWidth
                          name="password"
                          type="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          error={formik.errors.password ? true : false}
                          helperText={formik.errors.password}
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
                          Login
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

export default AdminSignin;
