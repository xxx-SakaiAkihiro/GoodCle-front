import axios from "axios";

export const READ_TMDbAPI = "READ_TMDbAPI";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";
const QUERYSTRING = "?token=token123";

export const readTMDbAPI = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  console.log(response);
  dispatch({ type: READ_TMDbAPI, response });
};
