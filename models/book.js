const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Book = sequelize.define("Book", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.DOUBLE,
  },
  reviews: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.DOUBLE,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  genre: {
    type: DataTypes.STRING,
  },
});

module.exports = Book;

