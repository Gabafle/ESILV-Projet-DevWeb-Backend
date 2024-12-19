const {DataTypes} = require('sequelize');
const sequelize = require('../db/connection');
const user = require('../models/user');

const Shop = sequelize.define("Shop", {
    name: {
        TYPE: String,
        defaultValue: "NewShop",
        allowNull: false,
    },
    description: {
        TYPE: String,
        defaultValue: "",
    },
    address: { TYPE: String,
        defaultValue: "Sweet Home Alabama",
    },
    avis: {
        TYPE: String,
        defaultValue: "",
    },
    note: {
        TYPE: Number,
        defaultValue: 0,
    },
    articles: {
        TYPE: Array,
        defaultValue: [],
    },
    owner: {
        TYPE: user,
        defaultValue: null,
    },
})