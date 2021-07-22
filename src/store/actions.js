/* eslint-disable consistent-return */
import axios from 'axios';
import * as types from './mutation-types';

axios.defaults.baseURL = 'https://swapi.dev/api/';

const addIdsToObjects = (data) => data.map((obj) => {
  // Strip id from url property and add it to object
  const id = Number(obj.url.match(/\d+/)[0]);

  return { ...obj, id };
});

const getNumberOfPages = (count) => Math.ceil(count / 10);

export default {
  fetchStarships (context, page) {
    // If data is already fetched then skip
    if (!context.state.starships[page]) {
      return axios.get(`starships/?page=${page}`).then((response) => {
        const starships = addIdsToObjects(response.data.results);
        const numberOfPages = getNumberOfPages(response.data.count);

        context.commit({
          type: types.ADD_STARSHIPS,
          numberOfPages,
          starships,
          page
        });

        starships.forEach((starship) => {
          context.commit({
            type: types.ADD_STARSHIP,
            starship
          });
        });
      }).catch((error) => error);
    }
  },
  fetchStarship (context, id) {
    // If data is already fetched then skip
    if (!context.state.starship[id]) {
      return axios.get(`starships/${id}/`).then((response) => {
        // Add id to starship object
        const starship = { ...response.data, id };

        context.commit({
          type: types.ADD_STARSHIP,
          starship
        });
      }).catch((error) => error);
    }
  },
  fetchSearchData (context, { name, searchValue, searchPage }) {
    return axios.get(`${name}/?search=${searchValue}&page=${searchPage}`).then((response) => {
      const results = addIdsToObjects(response.data.results);
      const numberOfPages = getNumberOfPages(response.data.count);

      return {
        results,
        numberOfPages
      };
    }); // Request is caught inside component
  }
};
