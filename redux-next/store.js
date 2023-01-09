import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import feedBackReducer from "./reducers/feedback-reducer.js";

const reducers = combineReducers({
	feedBack: feedBackReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;