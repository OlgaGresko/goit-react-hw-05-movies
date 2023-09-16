import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrendingMovies } from 'services/fetchAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        const trendingMovies = response.data.results;
        setTrendingMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
