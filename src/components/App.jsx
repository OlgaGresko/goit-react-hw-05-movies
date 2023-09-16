import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { NotFound } from 'pages/NotFound';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        padding: 20,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
