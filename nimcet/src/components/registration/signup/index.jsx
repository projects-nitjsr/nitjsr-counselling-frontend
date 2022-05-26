import { Button, Grid } from "@mui/material";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./style.css";

function onChange(value) {
  console.log("Captcha value:", value);
}
const signup = () => {
  return (
    <div className="box">
      <div className="header">New Candidate Signup</div>
      <form className="form">
        <div className="form_elem">
          <label className="required">First Name</label>
          <input
            className="input-field "
            placeholder="First Name"
            type="text"
          />
        </div>
        <br />
        <div className="form_elem">
          <label>Middle Name</label>
          <input
            className="input-field"
            placeholder="Middle Name"
            type="text"
          />
        </div>
        <br />
        <div className="form_elem">
          <label>Last Name</label>
          <input className="input-field" placeholder="Last Name" type="text" />
        </div>
        <br />
        <div className="form_elem">
          <label className="required">Email</label>
          <input className="input-field" placeholder="Email" type="text" />
        </div>
        <br />
        <div className="form_elem">
          <label className="required">Mobile</label>
          <input className="input-field" placeholder="Mobile" type="text" />
        </div>
        <br />
        <div className="form_elem captcha">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </div>
        <Grid container justifyContent={"space-around"} direction={"row"}>
          <Grid item>
            <Button variant="outlined">Reset</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="success">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default signup;
