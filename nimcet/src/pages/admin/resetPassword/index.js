import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { resetAPIcall, resetValidationSchema } from "./logic";
import useStyles from "./styles";
import { useToasts } from "react-toast-notifications";
import useQuery from "../../../lib/hooks/useQuery";

/**
 *
 * @param {*} props
 * @returns
 */
const AdminResetPassword = (props) => {
  const classes = useStyles();
  const query = useQuery();
  const token = query.get("t");
  const toast = useToasts();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm: "",
    },
    validationSchema: resetValidationSchema,
    onSubmit: (values) => {
      const { password } = values;
      resetAPIcall({ password, token })
        .then((res) => {
          const { error, message } = res;
          error?.forEach((err) => toast.addToast(err, { appearance: "error" }));
          message?.forEach((err) =>
            toast.addToast(err, { appearance: "success" })
          );
          if (error?.length === 0) {
            navigate("/admin/login");
          }
        })
        .catch((err) => {
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
                  Admin Password Reset
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
                      <li>The password should be at least 8 characters long</li>
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
                <Typography className={classes.topBar}>
                  Reset Password
                </Typography>
              </Grid>
              <Grid item>
                <Box className={classes.form}>
                  <form onSubmit={formik.handleSubmit}>
                    <Grid container alignItems={"center"} direction="row">
                      <Grid xs={3} item>
                        <Typography>Password:</Typography>
                      </Grid>
                      <Grid xs={9} item>
                        <TextField
                          fullWidth
                          type="password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          error={formik.errors.password ? true : false}
                          helperText={formik.errors.password}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <br />
                    {/* <Grid container alignItems={"center"} direction="row">
                      <Grid xs={3} item>
                        <Typography>Email:</Typography>
                      </Grid>
                      <Grid xs={9} item>
                        <TextField
                          fullWidth
                          type="text"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          error={formik.errors.email ? true : false}
                          helperText={formik.errors.email}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <br /> */}
                    <Grid container alignItems={"center"} direction="row">
                      <Grid xs={3} item>
                        <Typography>Confirm Password:</Typography>
                      </Grid>
                      <Grid xs={9} item>
                        <TextField
                          fullWidth
                          name="confirm"
                          type="password"
                          value={formik.values.confirm}
                          onChange={formik.handleChange}
                          error={formik.errors.confirm ? true : false}
                          helperText={formik.errors.confirm}
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

export default AdminResetPassword;
