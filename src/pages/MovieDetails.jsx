import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import React, { Suspense } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  
  return (
    <div>
      <div>
        <GoBackBtn/>
        <MovieInfo id={movieId} />
      </div>
      <div>
        <AdditionalInfo id={movieId} />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
