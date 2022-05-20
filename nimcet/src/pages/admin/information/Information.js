import React, { useState } from "react";
import InformationTable from "./InformationTable";
import {
  Paper,
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
} from "@mui/material";

const Information = () => {
  const [hallTicket, setHallTicket] = useState("");
  const [data, setData] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(hallTicket);
    setHallTicket("");
    setData({ id: 1 });
  };

  return !data ? (
    <Container sx={{ marginTop: "2rem" }}>
      <Paper sx={{ border: "1px solid black" }}>
        <div
          className="heading"
          style={{
            backgroundColor: "#1976d2",
            color: "#fff",
            padding: "5px",
            textAlign: "center",
          }}
        >
          <Typography>Enter hall ticket number</Typography>
        </div>
        <form
          onSubmit={onSubmitHandler}
          style={{ margin: "20px 0", padding: "0 10px", textAlign: "center" }}
        >
          <FormControl fullWidth>
            <TextField
              name="hallticket"
              id="hallticket"
              value={hallTicket}
              variant="outlined"
              placeholder="Enter hall ticket number"
              onChange={(e) => {
                setHallTicket(e.target.value);
              }}
            />
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            style={{ margin: "10px 0" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  ) : (
    <InformationTable />
  );
};

export default Information;
