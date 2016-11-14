import React, {Component} from 'react'
import moment from 'moment'
import Day from './Day'
import Hour from './Hour'

class Login extends Component {

	constructor() {
		super();
		this.state = {
			username: "",
			password: ""
		};

		// this.handleUsernameInput = this.handleUsernameInput.bind(this);
		// this.handlePasswordInput = this.handlePasswordInput.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount() {
		// io.socket.get('/appointment/find', data, (appointments, res) => {
		// 	if (res.statusCode == 200) {
		// 		this.setState({
		// 			appointments: appointments
		// 		});
		// 	}
		// });
	}


	onSubmit(e) {
		e.preventDefault();
		const data = {
			identifier: this.usernameInput.value.toLowerCase(),
			password: this.passwordInput.value.toLowerCase()
		};

		console.log("Posting", data);

		io.socket.post('/auth/local', data, (user, jwres) => {
			if (jwres.statusCode == 200 && user) {
				console.log("SUCCESS");
				console.log(`Greetings ${user.username}!`);
			}else{
				console.log('jwres', jwres);
			}
		});
	};

	render() {

		const containerStyle = {
			display: "flex",
			justifyContent: "center",
			alignContent: "center",
		};


		return (
			<div style={containerStyle}>
				<h1>Cal</h1>
				<form onSubmit={this.onSubmit}>
					<input type="text" ref={input => this.usernameInput = input}/>
					<input type="password" ref={input => this.passwordInput = input}/>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		)
	}
}

export default Login