import React from "react";
import './style.css';
const setPassword = () => {
	return (
		<div className="outer-box">
		<div className='header'>Set Your Password?</div>
			<div className="heading">Account activation for *******</div>
			<form className="form">
				<div className="form_elem">
					<label className='required'>Choose a Password:</label>
					<input className="input-field "  type="text"/>
				</div>
				<br/>
				<div className="form_elem">
					<label className="required">Password Confirmation:</label>
					<input className="input-field"  type="text"/>
				</div>
				<br/>
				<div className="form_elem">
					<label className="required">Choose a security question:</label>
					<select className=" select-field">
						<option value="school-name">What is the name of your elementary school</option>
						<option value="pet-name">What is your pets name</option>
					</select>
				</div>
				<br/>
				<div className="form_elem answer-field">
					<label className="required">Answer:</label>
					<input className="input-field"  type="text"/>
				</div>
				<br/>
				
				<button className="activate-btn">Activate</button>
			</form>
		</div>
	)
};

export default setPassword;
