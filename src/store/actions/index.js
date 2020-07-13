import axios from "axios";

export const READ_TMDbAPI = "READ_TMDbAPI";
const ROOT_URL = "https://api.themoviedb.org/3/discover/movie?";
const QUERYSTRING = "sort_by=popularity.desc";
const API_KEY = process.env.REACT_APP_API_KEY;

export const readTMDbAPI = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}${API_KEY}&language=ja&${QUERYSTRING}`);
  console.log(response.data.results);
  dispatch({ type: READ_TMDbAPI, response });
};
