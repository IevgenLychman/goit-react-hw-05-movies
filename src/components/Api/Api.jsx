const KEY = '701545915cb61a19f4461a09eaf19948';

export const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  )
    .then(res => res.json())
    .then(data => data.results);
};

export const fetchMovieById = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(data => data);
};

export const fetchMovieCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  )
    .then(res => res.json())
    .then(data => data.cast);
};
