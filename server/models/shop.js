const {DataTypes} = require('sequelize');
const sequelize = require('./db');
const user = require('../models/user');


const Shop = sequelize.define("Shop", {
    name: {
        type: String,
        defaultValue: "NewShop",
        allowNull: false,
    },
    description: {
        type: String,
        defaultValue: "",
    },
    address: {
        type: String,
        defaultValue: "Sweet Home Alabama",
    },
    avis: {
        type: String,
        defaultValue: "",
    },
    note: {
        type: Number,
        defaultValue: 0,
    },
    articles: {
        type: Array,
        defaultValue: [],
    },
    owner: {
        type: user,
        defaultValue: null,
    },

})

module.exports = Shop;