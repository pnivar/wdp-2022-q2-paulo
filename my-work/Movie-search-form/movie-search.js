/* It's often good practice to store important values inside variables,
even when they're not being reused all that often, because it can 
make the program easier to understand. In this case, storing the
limit values inside minYearLimit and maxYearLimit vars at the start
of the file makes it clear that we can adjust these values - if we
wanted to - very easily easily just by changing the below variables. */
const minYearLimit = 1920;
// Gets current year. We want to use the Date function here because
// hardcoding a value like 2022 would make make the value outdated
// come new year
const maxYearLimit = new Date().getFullYear();

// we store all the DOM selectors for the elements that we'll work with
// in variables, all in one place
const searchTitleElement = document.querySelector("#search-title");
const minYearElement = document.querySelector("#search-min-year");
const maxYearElement = document.querySelector("#search-max-year");
const spinner = document.querySelector("#results-spinner");
const searchResultsElement = document.querySelector("#search-results");

/* We can specify min and max values for inputs of type number using HTML
attributes, however, because we want the max value to always be the current year,
and HTML doesn't have a "get current year" utility, we set these limits using JS. */
minYearElement.min = minYearLimit;
maxYearElement.max = maxYearLimit;

/* Let's also use the previously defined limits as the default, starting values
for the year number fields */
minYearElement.value = minYearLimit;
maxYearElement.value = maxYearLimit;

/* window stores everything there is to know about the page,
window.location stores info about the URL, and window.location.search
stores specifically the string of all the parameters in the URL.
This string could look something like:
  
"?search-title=titanic&search-min-year=&search-max-year=" */
const urlQueryStr = window.location.search;

/* Check that urlQueryStr is not empty to confirm that URL params have
been set by the form submission. It's only then that we want to do
something. If the form wasn't submitted yet, we don't want to take action. */
if (urlQueryStr.length > 0) {
  /* Make spinner visible by adding a class that has display: inline-block,
  instead of display: none */
  spinner.classList.add("results-spinner--show");

  /* Instead of using various string operations on urlQueryStr to extract
  the parameters and their values, we create a new URLSearchParams
  object (a built-in feature), which handles the extraction for us
  using .get methods. */
  const urlParams = new URLSearchParams(urlQueryStr);
  const searchTitle = urlParams.get("search-title");
  const searchMinYear = urlParams.get("search-min-year");
  const searchMaxYear = urlParams.get("search-max-year");

  /* Forms clear their field values after submission. Sometimes this is
  inconvenient for the user. So, to prevent this from happening, we re-apply
  the submitted values to the fields according to URL params. */
  searchTitleElement.value = searchTitle;
  /* If min and max URL params are set, use them to populate the form, 
  instead of the default min and max limit constants. */
  if (searchMinYear) minYearElement.value = searchMinYear;
  if (searchMaxYear) maxYearElement.value = searchMaxYear;

  /* This array will eventually store all the matching film objects,
  each one containing a lot of info about the movie. We'll populate 
  this array gradually. */
  let detailedFilmInfoArr = [];

  /* Send a GET request to the Open Movie Database API. This requires an API key 
  (which you can request from the API service's official website).
  Using the param "s" we indicate that we want to search for the value of
  searchTitle, which refers to what was written in the searchbox.
  
  This fetch will return to us a list of MULTIPLE matching movies, but with
  only a MINIMAL info about each movie. We can use the "t" or "i" params to
  retrieve ALL of info about a movie, but only one at a time. The API doesn't
  allow us to retrieve ALL info about MULTIPLE movies in one go. Thus, we will
  have to combine these two approaches manually ourselves. */
  fetch(`https://www.omdbapi.com/?apikey=81e9f2c1&s=${searchTitle}&type=movie`)
    .then((response) => response.json())
    .then(async (allResultsJson) => {
      /* Because fetch takes some time to complete, we can't react to it immediately.
      Starting a process at one point and completing it only after some time, once
      some resource becomes available is called asynchrnous programming. JavaScript
      has two main ways to deal with asynchronous challenges: CALLBACKS and PROMISES.

      Fetch creates a Promise object, which expect to get either RESOLVED or REJECTED.
      When we receive a VALID REPONSE to our query from the API, the Promise is resolved.
      If something goes wrong, the Promise is rejected. To react to a resolved Promise,
      we use the .then methods. To react to a rejected Promise, we use the .catch methods
      (which we don't have here)
      
      The first .then wait for a response from the API and then executes .json()
      to translate the data received from a Steam format into an easily-readable
      object format. This translation also takes some time to do. Hence, a second
      .then method is needed to react to when .json() completes its task.
      
      The second .then will execute an async function. An async function indicates
      that something within the function's body will need to be WAITED FOR using the
      keyword await. */

      // Store the array of movies retrieved from the API inside the var resultsArr
      let resultsArr = allResultsJson.Search;

      // if can't find title or no title provided
      // resultsArr will be undefined, so display
      // no results message

      if (resultsArr === undefined) {
        searchResultsElement.innerText = "No results found";
        spinner.classList.remove("results-spinner--show"); // hide spinner
        return;
      }

      // Loop through every movie result within resultsArr
      resultsArr.forEach((result) => {
        /* First, check that the movie's year of release is within the
        appropriate range. */
        if (result.Year >= searchMinYear && result.Year <= searchMaxYear) {
          /* For every single movie result within the correct year range, push into
          the previously-created, empty detailedFilmInfoArr the RESULT of a fetch
          call that queries for more information about a specific movie by using the
          "i" param (the IMDB ID).

          The RESULT of each fetch call will be a promise, thus detailedFilmInfoArr
          will be filled by a bunch of Promise objects waiting to be either resolved
          or rejected. They will be resolved or rejected on their own, with time,
          as the API reponds - effectively turning from a promise object into
          a movie object.
          
          Since we push to detailedFilmInfoArr ONCE for EACH resultsArr loop, detailedFilmInfoArr
          will contain as many elements as resultsArr MINUS THE OUT-OF-YEAR-RANGE movies.
          
          THE ORDER WILL ALSO BE PRESERVED!
          
          detailedFilmInfoArr may at first look something like:
          [
            some Promise(...),
            some Promise(...),
            some Promise(...),
            ...etc...
          ]

          ...and then, as the Promises get resolved, turn...

          [
            some Promise(...),
            {Title: "Titanic", Year: ...},
            some Promise(...),
            ...etc...
          ]

          ...until all the Promises get resolved into movie objects. */
          detailedFilmInfoArr.push(
            fetch(
              `https://www.omdbapi.com/?apikey=81e9f2c1&i=${result.imdbID}`
            ).then((response) => response.json())
          );
        }
      });

      // wait for ALL of the promises within detailedFilmInfoArr
      // to resolve
      // once they ALL resolve, then continue...

      /*
      The await keyword here is expected because we're in an await function (await can
      ONLY be used within an async function, in fact). This keyword will ensure that the
      function will pause at its line, UNTIL it has all the resources to execute. In this
      particular case, the resources are the resolved promises. 
      
      The Promise.all method will wait until all the promise objects inside detailedFilmInfoArr 
      have been resolved to movie objects, and only THEN it will continue with the program... */
      await Promise.all(detailedFilmInfoArr).then((films) => {
        /* If the films array is empty after excluding out-of-year-range movies,
        then dispay a 'no results' message and exit the function (end the program)
        using the return statement. */
        if (films.length === 0) {
          searchResultsElement.innerText = "No results found";
          // Hide the spinner now that no results have been found.
          spinner.classList.remove("results-spinner--show");
          return;
        }

        /* If there are results, then loop through every single film, extract its info, 
        and display them on the page. */
        films.forEach((film) => {
          /* Run the createSearchResultElement function, which will create a search result movie element, 
          ready to be added to the page. */
          let searchResultElement = createSearchResultsElement(film);
          // Add the new search results element to the page (note that searchResultsElement is PLURAL!).
          searchResultsElement.appendChild(searchResultElement);

          // Hide spinner now that the data has loaded.
          spinner.classList.remove("results-spinner--show");
        });
      });
    });
}

function createSearchResultsElement(filmObj) {
  // Create an empty div element
  let searchResultElement = document.createElement("div");
  // Add class "search-result" to the div
  searchResultElement.classList.add("search-result");

  // Movie title
  let searchResultTitleElement = document.createElement("h3");
  searchResultTitleElement.classList.add("search-result__title");
  searchResultTitleElement.innerText = filmObj.Title;
  searchResultElement.appendChild(searchResultTitleElement);

  // Year
  let searchResultYearElement = document.createElement("div");
  searchResultYearElement.classList.add("search-result__year");
  searchResultYearElement.innerText = filmObj.Year;
  searchResultElement.appendChild(searchResultYearElement);

  // Rating
  let searchResultRatedElement = document.createElement("div");
  searchResultRatedElement.classList.add("search-result__rating");
  searchResultRatedElement.innerText = filmObj.Rated;
  searchResultElement.appendChild(searchResultRatedElement);

  // Genre
  let searchResultGenreElement = document.createElement("div");
  searchResultGenreElement.classList.add("search-result__genre");
  searchResultGenreElement.innerText = filmObj.Genre;
  searchResultElement.appendChild(searchResultGenreElement);

  // Metascore
  let searchResultMetascoreElement = document.createElement("div");
  searchResultMetascoreElement.classList.add("search-result__metascore");
  searchResultMetascoreElement.innerText = filmObj.Metascore;
  searchResultElement.appendChild(searchResultMetascoreElement);

  // Img or poster
  let searchResultImgElement = document.createElement("img");
  searchResultImgElement.classList.add("search-result__poster");
  searchResultImgElement.src = filmObj.Poster;
  searchResultElement.appendChild(searchResultImgElement);

  // Plot
  let searchResultPlotElement = document.createElement("p");
  searchResultPlotElement.classList.add("search-result__plot");
  searchResultPlotElement.innerText = filmObj.Plot;
  searchResultElement.appendChild(searchResultPlotElement);

  // Return the read-to-add movies result element
  return searchResultElement;
}
