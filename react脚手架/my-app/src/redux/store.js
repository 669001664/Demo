import { createStore, applyMiddleware } from "redux";
import countReducer from '../reducer/reducer';
import thunk from "redux-thunk";

export default createStore(countReducer, applyMiddleware(thunk));