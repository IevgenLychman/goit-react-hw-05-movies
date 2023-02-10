import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=701545915cb61a19f4461a09eaf19948'
    )
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              // state={{ from: location }}
              cover={movie.poster_path}
            >
              {movie.title}
            </Link>

            {/* to={`/home/${movie.id}`}><li>{movie.title}</li> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
