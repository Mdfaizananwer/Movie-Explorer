// Sample movie data
const movies = [
    { id: 1, title: "Inception", releaseDate: "2010-07-16", genre: "Sci-Fi", cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"] , image: ["https://th.bing.com/th/id/OIP.O5IZiVF9zuXkEny5NDrWegHaFs?rs=1&pid=ImgDetMain"] },
    { id: 2, title: "The Matrix", releaseDate: "1999-03-31", genre: "Action", cast: ["Keanu Reeves", "Laurence Fishburne"] , image: ["https://th.bing.com/th/id/OIP.O5IZiVF9zuXkEny5NDrWegHaFs?rs=1&pid=ImgDetMain"] },
    { id: 3, title: "Elite", releaseDate: "2018-2024", genre: "Crime", cast: ["Omar Ayuso", "Carlos Montero"] , image: ["https://th.bing.com/th/id/OIP.O5IZiVF9zuXkEny5NDrWegHaFs?rs=1&pid=ImgDetMain"] },
    // Add more movies as needed
];

document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const movieList = document.getElementById("movieList");
    const movieDetails = document.getElementById("movieDetails");
    const detailsContent = document.getElementById("detailsContent");
    const backButton = document.getElementById("backButton");

    function renderMovies(movies) {
        movieList.innerHTML = "";
        movies.forEach(movie => {
            const movieItem = document.createElement("div");
            movieItem.className = "movie-item";
            movieItem.innerHTML = `
                <center><img src="${movie.image}" alt="${movie.title} poster" class="movie-image">
                <h2>${movie.title}</h2>
                <p>Release Date: ${movie.releaseDate}</p>
                <p>Genre: ${movie.genre}</p></center>
            `;
            movieItem.addEventListener("click", () => showMovieDetails(movie));
            movieList.appendChild(movieItem);
        });
    }

    function showMovieDetails(movie) {
        movieList.style.display = "none";
        movieDetails.style.display = "block";
        detailsContent.innerHTML = `
            <h2>${movie.title}</h2>
            <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
            <p><strong>Genre:</strong> ${movie.genre}</p>
            <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
        `;
    }

    backButton.addEventListener("click", () => {
        movieList.style.display = "flex";
        movieDetails.style.display = "none";
    });

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
        renderMovies(filteredMovies);
    });

    // Initial render
    renderMovies(movies);
});
