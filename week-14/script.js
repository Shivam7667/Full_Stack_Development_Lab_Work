document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const moviesContainer = document.getElementById('movies-container');
    const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API key

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            fetchMovies(query);
        }
    });

    async function fetchMovies(query) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
            const data = await response.json();
            displayMovies(data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    function displayMovies(movies) {
        moviesContainer.innerHTML = '';
        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');
            movieDiv.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <h3>${movie.title}</h3>
                <p>${movie.release_date}</p>
                <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">More Info</a>
            `;
            moviesContainer.appendChild(movieDiv);
        });
    }
});
