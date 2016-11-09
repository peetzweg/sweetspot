import React, {Component} from 'react'
import moment from 'moment'
import Hour from './Hour'


class Day extends Component {

	render() {
		let date = moment(this.props.date);
		date.startOf('day');
		const dayOfYear = date.dayOfYear();
		const style = {
			backgroundColor: "#eeeeee",
			flex: 1
		};

		let hours = [];
		while (date.dayOfYear() == dayOfYear) {
			hours.push(<Hour date={moment(date)} key={date.format()}/>);
			date.add(1, 'h');
		}

		return (
			<div style={style}>
				<h2>{`${date.format("DD")} ${date.format("dd")}`}</h2>
				<div>
					{hours}
				</div>
			</div>
		)
	}
}

export default Day