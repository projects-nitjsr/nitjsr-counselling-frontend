import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
}));

function NimLink({ to,children, ...props }) {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  );
}

export default NimLink;
