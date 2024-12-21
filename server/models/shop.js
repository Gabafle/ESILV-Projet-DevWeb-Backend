const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Shop = sequelize.define("Shop", {
    name: {
        type: DataTypes.STRING,
        defaultValue: "NewShop",
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        defaultValue: "",
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: "Sweet Home Alabama",
    },
    avis: {
        type: DataTypes.STRING,
        defaultValue: "",
    },
    note: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    articles: {
        type: DataTypes.JSON,
        defaultValue: [],
    },
    owner: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: true,
});

module.exports = Shop;
