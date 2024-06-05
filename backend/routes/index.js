var express = require('express');
var router = express.Router();
const API_KEY = process.env.API_KEY

router.get('/movies', async (req,res) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + API_KEY
    }
  };
  fetch(url, options)
    .then(resp => resp.json())
    .then(data => {
      res.json({ movies: data.results })
    })
})











module.exports = router;


