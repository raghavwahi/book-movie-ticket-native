import actions from "./action";

const initalState = {
  movies: [],
};

const Reducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.STORE_LATEST:
      return {
        movies: [...action.payload],
      };

    default:
      return state;
  }
};

export default Reducer;
