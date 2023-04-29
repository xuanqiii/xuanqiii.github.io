function searchShow(query) {
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  fetch(url)
    .then(response => response.json())
    .then((jsonData) => {
      let shows = jsonData.map(element => element.show);
      renderShows(shows);
      document.getElementById("errorMessage").innerHTML = "";
    })
    .catch((error) => {
      document.getElementById("errorMessage").innerHTML = error;
    })
}

function renderShows(shows) {
  const list = document.getElementById("resultsList");
  list.innerHTML = "";
  shows.forEach(show => {
    const element = document.createElement("li");
    const img = document.createElement("img");
    const text = document.createElement("span");
    
    img.src = show.image.medium;
    text.innerText = show.name + ' '+ show.genres +' '+ show.language;
    
    element.appendChild(text);
    element.appendChild(img);
    
    list.appendChild(element);

  });
}

// Codes above are for the genral search engine

function searchGenre() {
  // Get the user's search query
  const searchQuery = document.getElementById('searchQuery').value;

  // Make an AJAX request to the TVMaze API with the search query
  fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      // Group the search results by genre
      const resultsByGenre = groupByGenre(data);

      // Display the search results by genre
      displayResultsByGenre(resultsByGenre);
    });
}

function groupByGenre(results) {
  const resultsByGenre = {};

  results.forEach(result => {
    // Check if the result has a genre
    if (result.show.genres.length > 0) {
      // Loop through each genre in the result
      result.show.genres.forEach(genre => {
        // Check if the genre already exists in the resultsByGenre object
        if (!resultsByGenre[genre]) {
          // If the genre doesn't exist, create an array for it
          resultsByGenre[genre] = [];
        }

        // Add the result to the genre's array
        resultsByGenre[genre].push(result);
      });
    }
  });

  return resultsByGenre;
}

function displayResultsByGenre(resultsByGenre) {
  const resultsContainer = document.getElementById('results');

  // Clear any previous search results
  resultsContainer.innerHTML = '';

  // Loop through each genre in the resultsByGenre object
  Object.keys(resultsByGenre).forEach(genre => {
    // Create a header for the genre
    const genreHeader = document.createElement('h2');
    genreHeader.textContent = genre;

    // Create a list for the results in the genre
    const resultList = document.createElement('ul');

    // Loop through each result in the genre
    resultsByGenre[genre].forEach(result => {
      // Create a list item for the result
      const listItem = document.createElement('li');
      listItem.textContent = result.show.name;

      // Add the list item to the results list
      resultList.appendChild(listItem);
    });

    // Add the genre header and results list to the results container
    resultsContainer.appendChild(genreHeader);
    resultsContainer.appendChild(resultList);
  });
}

// Codes above are for the genre search engine


let searchTimeoutToken = 0;

window.onload = () => {
  const searchFieldElement = document.getElementById("searchField")
  searchFieldElement.onkeyup = (event) => {
    clearTimeout(searchTimeoutToken);
    searchTimeoutToken = setTimeout(() => {
      searchShow(searchFieldElement.value);
    }, 250);

  };
}

// toggle
const toggle = document.getElementById("toggle");
const body = document.querySelector("body");

toggle.addEventListener("change", function() {
  if (this.checked) {
    body.style.backgroundColor = "black";
    body.style.color = "#e9e0d5";
  } else {
    body.style.backgroundColor = "#e9e0d5";
    body.style.color = "black";
  }
});

