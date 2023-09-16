import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchTMoviesCast } from 'services/fetchAPI';
import { IMG_URL_CAST } from 'utils/keyAPI';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const response = await fetchTMoviesCast(movieId);
        const castInfo = await response.data.cast;
        setCast(castInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <div>
      {' '}
      {cast ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img src={`${IMG_URL_CAST}${actor.profile_path}`} alt="Actor" />
              ) : (
                <p>Sorry, no image</p>
              )}

              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Cast;
