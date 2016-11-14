/**
 * EventType.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		name: {
			type: "string",
			required: true,
		},
		description: {
			type: "text"
		},
		duration: {
			type: "string",
			required: true,
			isDuration:true,
		},
		owner: {
			model: "user",
			required: true,
		}
	},

	// Custom types / validation rules
	// (available for use in this model's attribute definitions above)
	types: {
		isDuration: function (value) {
			let moment = require("moment");
			return moment.isDuration(moment.duration(value))
		},
	}
};

