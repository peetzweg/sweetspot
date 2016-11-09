import React, {Component} from 'react'
import moment from 'moment'
import Day from './Day'
import Hour from './Hour'

class Calendar extends Component {

	constructor() {
		super();

		this.state = {
			appointments: [],
			now: moment(),
		}
	}

	componentWillMount() {
		const data = {
			where: {
				"date": 1478386800,
			}
		};
		io.socket.get('/appointment/find', data, (appointments, res) => {
			if (res.statusCode == 200) {
				this.setState({
					appointments: appointments
				});
			}
		});
		io.socket.on('appointment', this.updateAppointments);
	}

	componentWillUnmount() {
		io.socket.off('appointment', this.updateAppointments);
	}

	updateAppointments(msg) {
		console.log('msg', msg);
	}


	render() {

		console.log('this.state', this.state);
		const containerStyle = {
			display: "flex",
			justifyContent: "center",
			alignContent: "stretch",
		};

		let date = this.state.now;
		date.startOf("week");
		const week = date.week();


		let days = [];
		this.state.appointments.forEach((a)=> {
			const date = moment(a.moment);
			days.push(<Hour date={date} key={date.format()}/>);
		});


		return (
			<div>
				<h1>Cal</h1>
				<div style={containerStyle}>
					{days}
				</div>
			</div>
		)
	}
}

export default Calendar