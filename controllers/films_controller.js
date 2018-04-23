const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

filmsRouter.get('/:id', function(req, res) { // working in browser
  const allFilms = filmsData.all();
  res.json({ film: allFilms[req.params.id] });
});

filmsRouter.post('/', function(req, res) { // CREATE currently shows null
  const allFilms = filmsData.all();
  const newFilm = req.body.film;
  filmsData.add(newFilm);
  res.json(allFilms);
});

filmsRouter.put('/:id', function(req, res){ //UPDATE currently shows null
  const allFilms = filmsData.all();
  const updatedFilm = req.body.films;
  const index = req.params.id;
  filmsData.update();
  res.json({films: allFilms});
});

filmsRouter.delete('/:id', function(req, res){ // working delete
  const allFilms = filmsData.all();
  filmsData.delete();
  res.json(allFilms);
});

module.exports = filmsRouter;
