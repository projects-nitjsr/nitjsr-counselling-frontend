import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#E0E0E0",
    height: "100vh",
  },
  bar: {
    padding: "8px",
    backgroundColor: "green",
    color: "white",
  },
  cardsOuter: {
    padding: "8px",
  },
  cardsInter: {
    padding: "32px 8px",
    background:"white",
    "&:hover":{
        cursor:"pointer"
    }
  },
}));

export default useStyles;
