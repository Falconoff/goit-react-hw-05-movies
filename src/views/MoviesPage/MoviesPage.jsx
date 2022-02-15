import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMoviesByName } from '../../service/apiService';

import { ListItem } from './MoviesPage.styled';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query');

  useEffect(() => {
    if (currentQuery) {
      // fetch
      getMoviesByName(currentQuery)
        .then(response => response.results)
        .then(setMovies);
    }
  }, [currentQuery]);

  useEffect(() => {
    if (movies && movies.length === 0) {
      toast.warn('Nothing was found!');
    }
  }, [movies]);

  const onSubmit = evt => {
    evt.preventDefault();
    const query = evt.currentTarget.elements.inputValue.value;
    // for empty query
    if (query.trim() === '') {
      toast.warn('Please, enter your query');
      return;
    }
    setSearchParams({ query: query });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="inputValue"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      {movies && (
        <>
          {movies.length > 0 && (
            <ul>
              {movies.map(movie => {
                return (
                  <ListItem key={movie.id}>
                    <Link to={`${movie.id}`} state={{ from: location }}>
                      {movie.title}
                    </Link>
                  </ListItem>
                );
              })}
            </ul>
          )}
          {movies.length === 0 && <p>Nothing was found</p>}
        </>
      )}
    </div>
  );
}
