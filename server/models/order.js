const {DataTypes} = require('sequelize');
const sequelize = require('./db');
const user = require('../models/user');

const Order = sequelize.define(
	"Order", {
		client: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM('ordered', 'in_transit', 'delivered'),
			defaultValue: 'ordered',
			allowNull: false,
		},
		articles: {
			type: DataTypes.JSON,
			allowNull: false,
			defaultValue: {},
			validate: {
				isValidDictionary(value) {
		            if (typeof value !== 'object' || Array.isArray(value)) {
		              throw new Error('Articles must be a valid key-value dictionary');
		            }
		            for (const [key, val] of Object.entries(value)) {
		              if (!key || typeof val !== 'number' || val < 1) {
		                throw new Error(
		                  `Invalid entry: Key=${key}, Value=${val}. Keys must be valid and values must be numbers >= 1.`
		                );
		              }
		            }
		          },
			}
		},
		totalPrice: {
			type: DataTypes.FLOAT,
			allowNull: false,
			validate: {
				min: 0,
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Order;