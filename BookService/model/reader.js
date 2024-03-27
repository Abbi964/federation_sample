
import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Reader = sequelize.define("Reader",{
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
    }
})

export default Reader;