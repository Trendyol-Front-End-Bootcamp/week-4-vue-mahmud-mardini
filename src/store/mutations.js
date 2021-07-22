import * as types from './mutation-types';

export default {
  [types.ADD_STARSHIPS] (state, payload) {
    state.starships = {
      ...state.starships,
      [payload.page]: payload.starships,
      numberOfPages: payload.numberOfPages
    };
  },
  [types.ADD_STARSHIP] (state, payload) {
    state.starship = {
      ...state.starship,
      [payload.starship.id]: payload.starship
    };
  },
};
