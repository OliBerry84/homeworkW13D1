const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

booksRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json({books: allBooks});
});

booksRouter.get('/:id', function(req, res) { // working in browser
  const allBooks = booksData.all();
  res.json({ film: allBooks[req.params.id] });
});

booksRouter.post('/', function(req, res) { // CREATE currently shows null
  const allBooks = booksData.all();
  const newBook = req.body.books;
  booksData.add();
  res.json(allBooks);
});

booksRouter.put('/:id', function(req, res){ //UPDATE currently shows null
  const allBooks = booksData.all();
  const updatedBook = req.body.books;
  const index = req.params.id;
  booksData.update();
  res.json(allBooks);
});

booksRouter.delete('/:id', function(req, res){ // working delete
  const allBooks = booksData.all();
  booksData.delete();
  res.json(allBooks);
});

module.exports = booksRouter;
