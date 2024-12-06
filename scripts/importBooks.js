const sequelize = require("../config/db");
const Book = require("../models/book");
const fs = require("fs");

const booksData = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));

const importBooks = async () => {
  try {
    await sequelize.sync(); // Ensure the database is synced
    console.log("Database synced");

    // Insert books data into the database
    for (const book of booksData) {
      await Book.create(book);
    }
    console.log("Books have been successfully imported!");
    process.exit(0);
  } catch (error) {
    console.error("Error importing books:", error);
    process.exit(1);
  }
};

importBooks();

