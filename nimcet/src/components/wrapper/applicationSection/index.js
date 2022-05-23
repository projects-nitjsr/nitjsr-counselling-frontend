import { Box, Grid, Typography } from "@mui/material";
import useStyles from "./styles";

function ApplicationSectionWrapper({ name, children, ...props }) {
  const classes = useStyles();
  return (
    <Box>
      <Grid container direction="column">
        <Grid item>
          <Typography className={classes.heading} component={"span"}>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ApplicationSectionWrapper;
