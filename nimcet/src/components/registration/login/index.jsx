import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
  border: " 2px solid rgb(37, 150, 190);",
  boxShadow: "0px 0px",
  borderRadius: "0px",
}));

export default function BasicGrid() {
  const navigate = useNavigate();

  /**
   * 
   * @description This function is used to navigate to the signup page
   * @param {*} e 
   */
  const newRegistrationClickListener = (e) => {
    e.preventDefault();
    navigate("/student/signup");
  };

  

  return (
    <div>
      <div className="">
        <br />
        <div className="l-bar">
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
      <div className="l-boxes">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Item>
                <div className="l-leftBox">
                  <div className="lb-outline">
                    <div className="lb-content-box">
                      <div
                        className="lb-title"
                        style={{ backgroundColor: "rgb(56,124,180)" }}
                      >
                        Candidate Login
                      </div>
                      <br />
                      <div className="lb-content-box">
                        <div className="lb-content-box-interior">
                          <div>
                            <button type="button" onClick={newRegistrationClickListener} className="lb-button">
                              New Registration
                            </button>
                          </div>
                          <div className="lb-instructions">
                            <ol>
                              <li>
                                Candidate can only login through the email-id
                                provided during registration process.
                              </li>
                              <li>
                                Candidate can reset his/her password in case
                                he/she forgets the password.
                              </li>
                              <li>
                                After login, candidate can view his profile and
                                start filling the application form.
                              </li>
                              <li>
                                It is advised to read the FAQ and information
                                brochure before filling the application form.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <Item>
                <div className="l-rightBox">
                  <div className="rb-outline">
                    <div className="rb-content-box">
                      <div
                        className="rb-title"
                        style={{ backgroundColor: "rgb(56,124,180)" }}
                      >
                        Login
                      </div>
                      <div className="rb-content-box">
                        <div className="rb-content-box-interior">
                          <form className="form">
                            <br />
                            <div className="form_elem">
                              <label className="required">
                                <strong>Email</strong>
                              </label>
                              <input
                                className="input-field"
                                placeholder="Email"
                                type="text"
                              />
                            </div>
                            <br />
                            <div className="form_elem">
                              <label className="required">
                                <strong>Password</strong>
                              </label>
                              <input
                                className="input-field"
                                placeholder="Password"
                                type="password"
                              />
                            </div>
                            <br />
                            <input
                              type="checkbox"
                              value="lsRememberMe"
                              id="rememberMe"
                            />
                            <label for="rememberMe"> Remember me</label>
                            <br />
                            <br />
                            <br />
                            <div className="l-buttons">
                              <Stack direction="row" spacing={2}>
                                <button type="button" className="rb-login-btn">
                                  Log In
                                </button>
                                <button
                                  type="button"
                                  className="rb-fPassword-btn"
                                >
                                  Forgot Password?
                                </button>
                              </Stack>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
