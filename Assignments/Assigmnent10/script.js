async function displayMovies() {
    console.log("Displaying movies...");
    let response = await fetch(`https://portiaportia.github.io/csce242/json/movies.json`);
    let moviesJSON = await response.json();
    let movieDiv = document.getElementById("movies-section");

    //loop through the list of movies from the JSON file
    for(i in moviesJSON){
        let movie = moviesJSON[i];
        movieDiv.append(getMovieSection(movie));
    }
    
}

//Give JSON movie object
function getMovieSection(movie) {
    let movieSection = document.createElement("section");
    movieSection.classList.add("movie");

    let imageElem = document.createElement("img");
    imageElem.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    imageElem.classList.add("movie-img");
    movieSection.append(imageElem);
    movieSection.append(getMovieInfo(movie));
    
    return movieSection;
}

function getMovieInfo(movie) {
    let movieInfoElem = document.createElement("section");

    let h3Elem = document.createElement("h3");
    h3Elem.innerText = movie.title;
    movieInfoElem.append(h3Elem);

    let pElem = document.createElement("p");
    pElem.innerHTML = `<b>Director: </b>${movie.director}<br><br><b>Actors: </b>${movie.actors}<br><br><b>Year Released: </b>${movie.year}<br><br><b>Genres: </b>${movie.genres}<br><br>${movie.description}`;
    movieInfoElem.append(pElem);
    movieInfoElem.classList.add("movie-item");

    return movieInfoElem;
}


window.onload = function() {
    this.displayMovies();
}