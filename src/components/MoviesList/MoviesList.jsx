import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => {
        // if (!movie.title) {
        //   console.log(movie)
        //   return <li>not set</li>
        // }
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.original_name }
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
