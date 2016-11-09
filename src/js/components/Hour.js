import React, {
	Component,
	PropTypes,
} from 'react';
import moment from 'moment'

class Hour extends Component {
	render() {

		let date = moment(this.props.date);

		return (
			<div>{date.format("HH")}</div>
		);
	}
}

Hour.propTypes = {};
Hour.defaultProps = {};

export default Hour;
