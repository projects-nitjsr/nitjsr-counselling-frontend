import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid rgb(56,124,180)",
  },
  topBar: {
    backgroundColor: "rgb(56,124,180)",
    color: "#fff",
    padding: "8px",
  },
  form: {
    padding: "16px",
  },
  info: {
    backgroundColor: "#f8f4f4",
    border: "1px solid #ddd9d9",
    padding: "5px 0px",
  },
}));

export default useStyles;
