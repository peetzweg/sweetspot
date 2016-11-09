const moment = require('moment');

module.exports = {
	myFind: function (req, res) {
		console.log('req.params', req.params);
		let date = null;
		if (req.params.date) {
			date = moment(req.params.date)
		} else {
			date = moment()
		}
		Appointment.find({date: `${date.startOf('day').unix()}`}).exec((e, appointments)=> {
			if (!e) {
				return res.send(appointments);
			} else {
				return res.send(e);
			}
		});

	},
};

