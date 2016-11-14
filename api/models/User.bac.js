/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	attributes: {
		email:{
			type: 'string',
			unique: true,
			required: true,
			email: true,
			lowercase: true,
		},
		password:{
			type: 'string',
			required: true,
			minLength: 6
		},
		firstName: {
			type: 'string'
		},
		lastName: {
			type: 'string'
		},
		eventTypes: {
			collection: 'eventType',
			via: 'owner'
		}
	}
};

