import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./style.css";

function onChange(value) {
	console.log("Captcha value:", value);
}
const signup = () => {
	return (
		<div className="box">
			<div className="header">New Candidate Signin</div>
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
				<button className="reset-btn"> Reset</button>
			</form>
		</div>
	);
};

export default signup;
