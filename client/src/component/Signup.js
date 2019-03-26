import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import UserContext from './context/UserContext'

class Signup extends Component {
	static contextType = UserContext;

	state = {
		username: "",
		password: ""
	}

	changeHandler = (e) => {
		const {name, value} = e.target;
		this.setState({ [name]: value });
	}

	submitHandler = (e) => {
    e.preventDefault();
    console.log('clicked');
    console.log("this is where you do logic to post to an api route that creates a user if the user doesn't already exist (server-side validation)")
	}

	render () {
		return (
			<form onSubmit={this.submitHandler}>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.changeHandler}
				/>
				<input
					type="password"
					name="password" 
					value={this.state.password}
					onChange={this.changeHandler}
				/>
				<button type="submit">Submit</button>
			</form>
		);
	}
}

export default withRouter(Signup);