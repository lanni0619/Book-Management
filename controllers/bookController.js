const Book = require("../models/book");

const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ order: [["id", "DESC"]] });
    res.status(200).json({
      status: "success",
      results: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

const getOneBook = async (req, res) => {
  const { id } = req.params;
  try {
    const checkID = await Book.findByPk(id);
    if (!checkID) {
      return res.status(401).json({ message: "Invalid ID" });
    }

    const result = await Book.findByPk(id);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating book" });
  }
};

const createBook = async (req, res) => {
  const { name, author, rating, reviews, price, year, genre } = req.body;
  try {
    if (
      !name ||
      !author ||
      !rating ||
      !reviews ||
      !price ||
      !year ||
      (genre !== "Fiction" && genre !== "Non Fiction")
    ) {
      return res.status(500).json({ message: "Invalid book information" });
    }
    const book = await Book.create({
      name,
      author,
      rating,
      reviews,
      price,
      year,
      genre,
    });
    res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating book" });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, author } = req.body;
  try {
    const checkID = await Book.findByPk(id);
    if (!checkID) {
      return res.status(401).json({ message: "Invalid ID" });
    }

    await Book.update({ name, author }, { where: { id } });
    res.status(200).json({ message: "Book updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating book" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const checkID = await Book.findByPk(id);
    if (!checkID) {
      return res.status(401).json({ message: "Invalid ID" });
    }
    await Book.destroy({ where: { id } });
    res.status(204).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
};

module.exports = {
  createBook,
  getBooks,
  getOneBook,
  updateBook,
  deleteBook,
};

