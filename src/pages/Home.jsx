import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTrendingMovies } from 'components/Api/Api';

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
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
