import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getMoviesByTrend } from '../../service/apiService';

import { ListItem } from './HomePage.styled';

export default function HomePage() {
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    getMoviesByTrend()
      .then(response => response.results)
      .then(setMoviesArr);
  }, []);

  return (
    <div>
      <h2>Movies in trend:</h2>
      <ol>
        {moviesArr.map(movie => {
          return (
            <ListItem key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </ListItem>
          );
        })}
      </ol>
    </div>
  );
}
