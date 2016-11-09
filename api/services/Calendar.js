const moment = require('moment');

module.exports = {
	getAllAppointmentsForToday: (today) => {
		console.log(`Searching the for all Appointments for ${today.format('L')}`);

		Appointment.find({date: `${today.startOf('day').unix()}`}).exec((e, r)=> {
			if (!e) {
				return r;
			} else {
				sails.log(e);
			}
		});
	}
};