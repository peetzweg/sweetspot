/**
 * Appointment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		date: {
			type: "integer",
		},
		moment: {
			type: 'string',
		},
		name: {
			type: 'string',
		},
		free: {
			type: 'boolean',
			defaultsTo: true
		}
	},

	beforeCreate: (values, cb)=> {
		let moment = require('moment')(values.moment);
		values.date = moment.startOf('day').unix();
		cb();
	}
};

