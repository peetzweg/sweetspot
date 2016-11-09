const moment = require('moment');

module.exports = {
	createEmptyAppointments: (moment) => {
		// Get Today
		console.log(`Creating Empty Appointments for ${moment.format('L')}`);

		// Reset to Start of Day
		moment.startOf('day');

		const startDayOfYear = moment.dayOfYear();
		while (moment.dayOfYear() === startDayOfYear) {
			Appointment.create({moment: moment.format()}).exec(function (err, records) {
				if (err) {
					console.error(`Error while creating empty appointment for ${moment.format('LT')} ${moment.format('L')}`);
					console.error(err);
				}
			});
			moment.add(30, 'm');
		}
	}
};