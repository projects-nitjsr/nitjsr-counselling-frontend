import './style.css';
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function onChange(value) {
  console.log("Captcha value:", value);
}
const signup = () => {
	<div className='header'>
          New Candidate Signin
        </div>
        <form>
            <label className='required'>First Name</label>
            <input className="input-field " placeholder='First Name' type="text"/>
            <br/>
            <label>Middle Name</label>
            <input className="input-field" placeholder='Middle Name' type="text"/>
            <br/>
            <label>Last Name</label>
            <input className="input-field" placeholder='Last Name' type="text"/>
            <br/>
            <label className='required'>Email</label>
            <input className="input-field" placeholder='Email' type="text"/>
            <br/>
            <label className='required'>Mobile</label>
            <input className="input-field" placeholder='Mobile' type="text"/>
            <br/>
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={onChange}
            />

            <button> Reset</button>
        </form>
};

export default signup;
