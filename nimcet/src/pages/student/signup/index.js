import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { SignUpAPIcall, signupValidationSchema } from "./logic";
import useStyles from "./styles";
import { useToasts } from "react-toast-notifications";
import useQuery from "../../../lib/hooks/useQuery";

/**
 *
 * @param {*} props
 * @returns
 */
const StudentSignup = (props) => {
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
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      const { password } = values;
      SignUpAPIcall({ password, token })
        .then((res) => {
          const { error, message } = res;
          error?.forEach((err) => toast.addToast(err, { appearance: "error" }));
          message?.forEach((err) =>
            toast.addToast(err, { appearance: "success" })
          );
        })
        .catch((err) => {
          toast.addToast("Something went wrong", { appearance: "error" });
        });
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
                    Candidate Signup
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
                <Typography className={classes.topBar}>Registration</Typography>
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

export default StudentSignup;
