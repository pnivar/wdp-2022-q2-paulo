let urlVarStr = window.location.search;
let urlVarArr = urlVarStr.split("&");

// Search field value
let searchTitle = urlVarArr[0].split("=")[1];
// Min year value
let searchMinYear = urlVarArr[1].split("=")[1];
// Max year value
let searchMaxYear = urlVarArr[2].split("=")[1];

// Sending a GET request for a response from the movie API
fetch(`https://www.omdbapi.com/?apikey=81e9f2c1&s=${searchTitle}`)
  .then((response) => response.json())
  .then((json) => console.log(json));