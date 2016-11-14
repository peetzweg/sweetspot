/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
const moment = require('moment');

module.exports.bootstrap = function (cb) {
	console.log('Bootstrapping...');
	
	Bootstrap.createEmptyAppointments(moment());

	sails.config.permissions.adminUsername = 'admin';
	sails.config.permissions.adminEmail = 'admin@example.com';
	sails.config.permissions.adminPassword = 'admin1234';

	cb();
};


