export default {
  currentPageStarships: (state) => (page) => state.starships[page],
  numberOfStarshipsPages: (state) => state.starships.numberOfPages,
  getStarship: (state) => (id) => state.starship[id]
};
