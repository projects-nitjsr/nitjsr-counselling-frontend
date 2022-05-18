import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import PagesNavbar from "../../../components/navbar/PagesNavbar";

const Index = () => {
  const [securityQuestions, setSecurityQuestions] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setSecurityQuestions(e.target.value);
  };

  const onSubmit = () => {
    console.log(password);
    console.log(cpassword);
    console.log(securityQuestions);
    console.log(answer);
  };

  const questions = [
    {
      id: 1,
      value: "ques1",
      text: "This is a question",
    },
    {
      id: 2,
      value: "ques2",
      text: "This is another question",
    },
    {
      id: 3,
      value: "ques3",
      text: "This is yet another question",
    },
  ];

  return (
    <>
      <PagesNavbar />
      <Container maxWidth="lg">
        <Grid container my={3} spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ border: "1px solid black" }}>
              <div
                className="heading"
                style={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  padding: "5px",
                }}
              >
                <Typography>Important Information</Typography>
              </div>
              <Container sx={{ padding: "20px 10px" }}>
                <div
                  className="rules"
                  style={{ backgroundColor: "#f5f5f5", padding: "10px" }}
                >
                  <ol>
                    <li>
                      Please read the instructions carefully before setting the
                      password.
                    </li>
                    <li>
                      Password must be a string containing atleast 8 characters.
                    </li>
                    <li>
                      Password must contain 1 uppercase alphabet, 1 lower case
                      alphabet and 1 special character like *,$,!,@ etc.
                    </li>
                    <li>Select the security question wisely.</li>
                    <li>
                      Candidate must remember the security question and process
                      throughout the NIMCET 2022 process.
                    </li>
                  </ol>
                </div>
              </Container>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ border: "1px solid black" }}>
              <div
                className="heading"
                style={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  padding: "5px",
                }}
              >
                <Typography>Set your password</Typography>
              </div>
              <Container sx={{ padding: "20px 10px" }}>
                <Typography variant="subtle2">
                  Account Activitation for deanacad@nitjsr.ac.in
                </Typography>
                <hr />
                <Grid container spacing={2}>
                  <Grid item>
                    <Typography>Choose a password: *</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="password"
                      variant="standard"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item>
                    <Typography>Confirm password: *</Typography>
                  </Grid>
                  <Grid item sx={{ textAlign: "center" }}>
                    <TextField
                      name="cpassword"
                      variant="standard"
                      onChange={(e) => {
                        setCPassword(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container my={2}>
                  <Grid item>
                    <Typography>Choose a security question: *</Typography>
                  </Grid>
                  <Grid item>
                    <Box sx={{ minWidth: "10rem" }}>
                      <FormControl fullWidth>
                        <InputLabel id="security question">
                          Choose a security question
                        </InputLabel>
                        <Select
                          labelId="security options"
                          id="security-options"
                          value={securityQuestions}
                          label="Security Questions"
                          onChange={handleChange}
                        >
                          {questions.map((question) => {
                            return (
                              <MenuItem
                                key={question.id}
                                value={question.value}
                              >
                                {question.text}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item>
                    <Typography>Answer: *</Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      name="answer"
                      variant="standard"
                      multiline
                      maxRows={4}
                      onChange={(e) => {
                        setAnswer(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>

                <Button
                  variant="contained"
                  sx={{ marginTop: "10px" }}
                  onClick={onSubmit}
                >
                  Activate
                </Button>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Index;
