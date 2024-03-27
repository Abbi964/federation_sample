
import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const BookReader = sequelize.define("BookReader",{
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true
    }
})

export default BookReader;