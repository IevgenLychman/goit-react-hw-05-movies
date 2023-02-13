import { fetchMovieById } from 'components/Api/Api';
import { useEffect, Suspense, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const goBackLink = '/';

  useEffect(() => {
    async function fetchMovie(id) {
      try {
        const movie = await fetchMovieById(id);

        setMovie({
          imgUrl: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,

          rating: Math.floor(movie.vote_average * 10),
          genres: movie.genres.map(genre => genre.name).join(' '),
          title: movie.title,
          owerview: movie.overview,
          year: new Date(movie.release_date).getUTCFullYear(),
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie(movieId);
  }, [movieId]);

  return (
    <main>
      <div>
        <NavLink to={goBackLink}>Go back</NavLink>
        <div>
          <img src={movie.imgUrl} alt="Movie poster" width="250" height="350" />
          <div>
            <h2>
              {movie.title} ({movie.year})
            </h2>
            <p>User score: {movie.rating}%</p>
            <h3>Owerview</h3>
            <p>{movie.owerview}</p>
            <h3>Genres</h3>
            <p>{movie.genres}</p>
          </div>
        </div>

        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};

export default Movie;
