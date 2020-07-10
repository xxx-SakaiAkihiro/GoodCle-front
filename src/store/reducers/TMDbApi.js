import { READ_TMDbAPI } from "../actions/index";

export default (state = {}, action) => {
  switch (action.type) {
    case READ_TMDbAPI:
      return state;
    default:
      return state;
  }
};
