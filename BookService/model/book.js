
import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Book = sequelize.define("Book",{
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
    description : {
        type : DataTypes.STRING,
        allowNull : false
    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    authorId : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})

export default Book;