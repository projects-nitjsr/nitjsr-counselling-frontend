import { Grid, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
  menu: {
    backgroundColor: "#2a3eb1",
    "&:hover": {
      backgroundColor: "#3d5afe",
      cursor: "pointer",
    },
  },
  styled: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

function NimLink({ to, children, ...props }) {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
}

export function StyledLink({ to, sx, text, ...props }) {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Typography
      className={classes.styled}
      component={"span"}
      onClick={(e) => navigate(to)}
      sx={sx}
    >
      {text}
    </Typography>
  );
}

export function MenuBarLink({ to, children, ...props }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleNavigate = (e) => {
    navigate(to);
  };
  return (
    <Toolbar onClick={handleNavigate} className={classes.menu}>
      <Grid container direction="row" justifyContent={"center"}>
        <Grid item>
          <Typography align="center" color={"#fff"}>
            {children}
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default NimLink;
