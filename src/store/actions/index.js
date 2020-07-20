import axios from "axios";

export const READ_TMDbAPI = "READ_TMDbAPI";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
const READ_URL = "https://api.themoviedb.org/3/discover/movie?";
const KEYWORD_URL = "https://api.themoviedb.org/3/movie/";
const QUERYSTRING = "sort_by=popularity.desc";
const API_KEY = process.env.REACT_APP_API_KEY;

export const readTMDbAPI = () => async (dispatch) => {
  const response = await axios.get(
    `${READ_URL}${API_KEY}&language=ja&${QUERYSTRING}`
  );
  dispatch({ type: READ_TMDbAPI, response });
};

export const getMovieDetail = (id) => async (dispatch) => {
  const response = await axios.get(
    `${KEYWORD_URL}${id}?${API_KEY}&language=ja`
  );
  console.log(response.data);
  dispatch({ type: GET_MOVIE_DETAIL, response });
};
