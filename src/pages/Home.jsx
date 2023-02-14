import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'components/Api/Api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const moviesArray = await fetchTrendingMovies();

        setMovies([...moviesArray]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
