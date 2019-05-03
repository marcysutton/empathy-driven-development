import React from 'react';

const SignupForm = (
	<div className="signup">
		<h1>Newsletter Sign Up</h1>
		<label className="field">
			<span>Name</span>
      <input type="text" name="name" />
    </label>
    <label className="field">
			<span>Email</span>
      <input type="text" name="email" />
    </label>
    <label className="field">
    	<span>Share with our partners?</span>
    	<input type="checkbox" name="subscribe" value="Yes" />
    </label>
    <button className="submit-btn">Submit</button>
  </div>
)
export default SignupForm
