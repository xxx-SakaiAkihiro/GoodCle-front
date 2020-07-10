import axios from "axios";

export const READ_TMDbAPI = "READ_TMDbAPI";
const ROOT_URL = "https://api.themoviedb.org/3/discover/movie?";
const QUERYSTRING = "sort_by=popularity.desc";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const readTMDbAPI = () => async (dispatch) => {
  console.log("API" + REACT_APP_API_KEY);
  const response = await axios.get(
    `${ROOT_URL}${process.env.REACT_APP_API_KEY}&${QUERYSTRING}`
  );
  console.log(response);
  dispatch({ type: READ_TMDbAPI, response });
};
