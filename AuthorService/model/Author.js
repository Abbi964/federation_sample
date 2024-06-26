// const {DataTypes} = require('sequelize')
// const sequelize = require('../util/database.js')
import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Author = sequelize.define("Author",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    about : {
        type : DataTypes.STRING,
        allowNull : false
    }
})

export default Author;