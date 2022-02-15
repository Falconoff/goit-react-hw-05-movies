import axios from 'axios';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

// строки запросов:
// https://api.themoviedb.org/3/ trending/movie/week?         api_key=000 - все в тренде недельном          // response.data.results
// https://api.themoviedb.org/3/ search/movie?query=${query}& api_key=000 - поиск всех фильмов по названию  // response.data.results
// https://api.themoviedb.org/3/ movie/${movieId}?            api_key=000 - 1 фильм по id                   // response.data
// https://api.themoviedb.org/3/ movie/${movieId}/credits?    api_key=000 - актёры в фильме                 // response.data.cast
// https://api.themoviedb.org/3/ movie/${movieId}/reviews?    api_key=000 - отзывы о фильме                 // response.data.results

const API_KEY = 'a3ec7c1621ade0b1491e66cd43b88745';
const BaseURL = 'https://api.themoviedb.org/3/';

export function getMoviesByName(query){
  return fetchMoviesApiData(`${BaseURL}search/movie?query=${query}&api_key=${API_KEY}`)
}

export function getMoviesByTrend(){
  return fetchMoviesApiData(`${BaseURL}trending/movie/week?api_key=${API_KEY}`)
}

export function getMovieById(movieId){
  return fetchMoviesApiData(`${BaseURL}movie/${movieId}?api_key=${API_KEY}`)
}

export function getActors(movieId){
  return fetchMoviesApiData(`${BaseURL}movie/${movieId}/credits?api_key=${API_KEY}`)
}

export function getReviews(movieId){
  return fetchMoviesApiData(`${BaseURL}movie/${movieId}/reviews?api_key=${API_KEY}`)
}

// ------- Common Fetch Function -------
export const fetchMoviesApiData = async queryString => {
  try {
    const response = await axios.get(
      `${queryString}`
    );
    return await response.data;
  } catch (error) {
    // ============= NOTIFY =================
    toast.error(error.message);
  } 
};

getMoviesByName.propTypes = {
  query: PropTypes.string.isRequired,
};
getMovieById.propTypes = {
  movieId: PropTypes.string.isRequired,
};
getActors.propTypes = {
  movieId: PropTypes.string.isRequired,
};
getReviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

