import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "../reducer/reducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
