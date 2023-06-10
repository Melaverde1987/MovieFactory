const movie = JSON.parse(movies);
console.log(movie);

/*
// old version

function incrementLike() {
    var likeNumber = document.getElementsByClassName("like-number");
    for (let i = 0; i < likeNumber.length; i++) {
        likeNumber[i].innerHTML = parseFloat(likeNumber[i].innerHTML) + 1;
    }
}
*/

function addLike() {
  const cards = document.querySelector(".cards-list");

  cards.addEventListener("click", (event) => {
    // Adds 1
    const button = event.target.closest(".like-button");
    const container = button.closest(".card-like");
    const counter = container.querySelector(".like-number");
    counter.innerText = Number(counter.innerText) + 1;

    // Adds class Active/click Animation
    const icon = event.target.closest(".icon");
    icon.classList.remove("active");
    setTimeout(function () {
      icon.classList.add("active");
    }, 100);
  });
}

function sortByRating() {
  movie.sort(function compareNumbers(first, second) {
    return second.likes - first.likes;
  });

  document.getElementById("cards-list").innerHTML = ``;

  movie.forEach((value) => {
    document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${value.movieName}</h2>
                <p class="card-description">${value.description}</p>
                <p class="card-genre">Genre: ${value.genre}</p>
                <p class="card-language">Language: ${value.language}</p>
                <p class="card-land">Land: ${value.land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${value.likes}</span>
                </p>
            </div>
        </li>   
    `;
  });
}

function sortByTitle() {
  movie.sort(function (first, second) {
    if (first.movieName < second.movieName) {
      return -1;
    }
    if (first.movieName > second.movieName) {
      return 1;
    }
    return 0;
  });

  document.getElementById("cards-list").innerHTML = ``;

  movie.forEach((value) => {
    document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${value.movieName}</h2>
                <p class="card-description">${value.description}</p>
                <p class="card-genre">Genre: ${value.genre}</p>
                <p class="card-language">Language: ${value.language}</p>
                <p class="card-land">Land: ${value.land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${value.likes}</span>
                </p>
            </div>
        </li>   
    `;
  });
}

function sortByLanguage(language) {
  document.getElementById("cards-list").innerHTML = ``;

  movie.forEach((value) => {
    if (value.language === language) {
      document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${value.movieName}</h2>
                <p class="card-description">${value.description}</p>
                <p class="card-genre">Genre: ${value.genre}</p>
                <p class="card-language">Language: ${value.language}</p>
                <p class="card-land">Land: ${value.land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${value.likes}</span>
                </p>
            </div>
        </li>   
    `;
    }
    if (language === "All") {
      document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${value.movieName}</h2>
                <p class="card-description">${value.description}</p>
                <p class="card-genre">Genre: ${value.genre}</p>
                <p class="card-language">Language: ${value.language}</p>
                <p class="card-land">Land: ${value.land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${value.likes}</span>
                </p>
            </div>
        </li>   
    `;
    }
  });
}

function sortByGenre(genre) {
  document.getElementById("cards-list").innerHTML = ``;

  movie.forEach((value) => {
    if (value.genre === genre) {
      document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${value.movieName}</h2>
                <p class="card-description">${value.description}</p>
                <p class="card-genre">Genre: ${value.genre}</p>
                <p class="card-language">Language: ${value.language}</p>
                <p class="card-land">Land: ${value.land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${value.likes}</span>
                </p>
            </div>
        </li>   
    `;
    }
    if (genre === "All") {
      document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${value.movieName}</h2>
                <p class="card-description">${value.description}</p>
                <p class="card-genre">Genre: ${value.genre}</p>
                <p class="card-language">Language: ${value.language}</p>
                <p class="card-land">Land: ${value.land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${value.likes}</span>
                </p>
            </div>
        </li>   
    `;
    }
  });
}

function randomOrder() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  movie.sort(function compareNumbers(first, second) {
    //return first.id - second.id;
    return getRandomInt(movie.length) - getRandomInt(movie.length);
  });

  document.getElementById("cards-list").innerHTML = ``;

  movie.forEach((value) => {
    document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${value.image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${value.movieName}</h2>
                <p class="card-description">${value.description}</p>
                <p class="card-genre">Genre: ${value.genre}</p>
                <p class="card-language">Language: ${value.language}</p>
                <p class="card-land">Land: ${value.land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${value.likes}</span>
                </p>
            </div>
        </li>   
    `;
  });
}

// Default Sorting

for (let i = 0; i < movie.length; i++) {
  document.getElementById("cards-list").innerHTML += `
        <li class="card-item">
            <div class="card-image">
                <img src="${movie[i].image}" alt="">
            </div>
            <div class="card-text">
                <h2 class="card-title">${movie[i].movieName}</h2>
                <p class="card-description">${movie[i].description}</p>
                <p class="card-genre">Genre: ${movie[i].genre}</p>
                <p class="card-language">Language: ${movie[i].language}</p>
                <p class="card-land">Land: ${movie[i].land}</p>
                <p class="card-like">
                    <button type="button" class="like-button">
                        <svg class="icon" width="40" height="33">
                            <use href="./img/sprite.svg#like"></use>
                            <div class='red-bg'></div>
                        </svg>
                    </button>
                    <span id="like" class="like-number">${movie[i].likes}</span>
                </p>
            </div>
        </li>   
    `;

  // increments number of likes by clicking
  // Old Version
  /*
    var likeContainer = document.getElementsByClassName("card-like");

    for (let i = 0; i < likeContainer.length; i++) {
        likeContainer[i].addEventListener("click", incrementLike(), false);
    }
    */
}

/*
=========================
Select Options language
=========================
*/

var languages = [];

for (let i = 0; i < movie.length; i++) {
  var language = movie[i].language;

  if (languages.includes(language)) {
  } else {
    languages.push(language);
  }
}

console.log(languages);

for (let i = 0; i < languages.length; i++) {
  document.getElementById("language").innerHTML += `
        <option value="${languages[i]}">${languages[i]}</option>  
    `;
}

/*
=====================
Select Options Genre
=====================
*/

var genres = [];

for (let i = 0; i < movie.length; i++) {
  var genre = movie[i].genre;

  if (genres.includes(genre)) {
  } else {
    genres.push(genre);
  }
}

console.log(genres);

for (let i = 0; i < genres.length; i++) {
  document.getElementById("genre").innerHTML += `
        <option value="${genres[i]}">${genres[i]}</option>  
    `;
}

/*
======================
Add Like Function
======================
*/

addLike();

/*
===============================
Buttons Sort by Rating / Likes
===============================
*/
const sortRating = document.getElementById("sort-rating");
sortRating.addEventListener("click", sortByRating, false);

/*
===================
Buttons Sort by id
===================
*/
const sortRandom = document.getElementById("sort-random");
sortRandom.addEventListener("click", randomOrder, false);

/*
=================
Buttons Sort by title
=================
*/
const sortTitle = document.getElementById("sort-title");
sortTitle.addEventListener("click", sortByTitle, false);

// Random Number from 0 to 10
// console.log(Math.round(Math.random() * (10 - 1) + 1));

/*
==========================
Buttons Select by Language
==========================
*/
const selectLanguage = document.querySelector(".language");

selectLanguage.addEventListener("change", (event) => {
  sortByLanguage(event.target.value), false;
});

/*
==========================
Buttons Select by Genre
==========================
*/
const selectGenre = document.querySelector(".genre");

selectGenre.addEventListener("change", (event) => {
  sortByGenre(event.target.value), false;
});
