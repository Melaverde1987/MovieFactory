let movie = JSON.parse(movies);
console.log(movie);


function incrementLike() {
    var like = this.getElementsByClassName("like");
    for (let i = 0; i < like.length; i++) {
        like[i].innerHTML = parseFloat(like[i].innerHTML) + 1;
    }
}


function sortOrder() {
    movie.sort(function compareNumbers(first, second) {
        return second.likes - first.likes
    });

    document.getElementById('row').innerHTML = ``;


    movie.forEach((value) => {
        document.getElementById('row').innerHTML += `
            <div class="col col-12 col-lg-6 mb-4">
                <div class="box">
                    <div class="image bg-image hover-zoom">
                        <img src="${value.image}" alt="">
                    </div>
                    <div class="text py-3 px-2 d-flex flex-column">
                        <div class="title h5 px-3 mt-2 fw-bold">${value.movieName}</div>
                        <div class="px-3 mb-5">${value.description}</div>
                        <div class="px-3 mb-2">Genre: ${value.genre}</div>
                        <div class="px-3 mb-2">Language: ${value.language}</div>
                        <div class="px-3">Land: ${value.land}</div>
                        <div class="mt-auto mb-3 js px-3 fs-3 text-end align-self-end cursor">Like
                            <div id="like" class="like my-bg inline p-3 rounded-pill">${value.likes}</div>
                        </div>
                    </div>
                </div>
            </div>   
        `;

        //increments number of likes by clicking
        var items = document.getElementsByClassName("col");

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', incrementLike, false);
        }
    })

}


function randomOrder() {
    movie.sort(function compareNumbers(first, second) {
        return first.id - second.id
    });

    document.getElementById('row').innerHTML = ``;

    movie.forEach((value) => {

        document.getElementById('row').innerHTML += `
            <div class="col col-12 col-lg-6 mb-4">
                <div class="box">
                    <div class="image bg-image hover-zoom">
                        <img src="${value.image}" alt="">
                    </div>
                    <div class="text py-3 px-2 d-flex flex-column">
                        <div class="title h5 px-3 mt-2 fw-bold">${value.movieName}</div>
                        <div class="px-3 mb-5">${value.description}</div>
                        <div class="px-3 mb-2">Genre: ${value.genre}</div>
                        <div class="px-3 mb-2">Language: ${value.language}</div>
                        <div class="px-3">Land: ${value.land}</div>
                        <div class="mt-auto mb-3 js px-3 fs-3 text-end align-self-end cursor">Like
                            <div id="like" class="like my-bg inline p-3 rounded-pill">${value.likes}</div>
                        </div>
                    </div>
                </div>
            </div>   
        `;

        //increments number of likes by clicking
        var items = document.getElementsByClassName("col");

        for (let i = 0; i < items.length; i++) {
            items[i].addEventListener('click', incrementLike, false);
        }
    })

}




for (let i = 0; i < movie.length; i++) {

    document.getElementById('row').innerHTML += `
        <div class="col col-12 col-lg-6 mb-4">
            <div class="box">
                <div class="image bg-image hover-zoom">
                    <img src="${movie[i].image}" alt="">
                </div>
                <div class="text py-3 px-2 d-flex flex-column">
                    <div class="title h5 px-3 mt-2 fw-bold">${movie[i].movieName}</div>
                    <div class="px-3 mb-5">${movie[i].description}</div>
                    <div class="px-3 mb-2">Genre: ${movie[i].genre}</div>
                    <div class="px-3 mb-2">Language: ${movie[i].language}</div>
                    <div class="px-3">Land: ${movie[i].land}</div>
                    <div class="mt-auto mb-3 justify px-3 fs-3 text-end align-self-end cursor">Like
                        <div id="like" class="like my-bg inline p-3 rounded-pill">${movie[i].likes}</div>
                    </div>
                </div>
            </div>
        </div>   
    `;

    //increments number of likes by clicking
    var items = document.getElementsByClassName("col");

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', incrementLike, false);
    }
}



//sort by rating/likes
var sort = document.getElementById("sort");
sort.addEventListener('click', sortOrder, false);

//sort by id
var random = document.getElementById("sort2");
random.addEventListener('click', randomOrder, false);


