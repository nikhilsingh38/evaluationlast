import  reducer  from "./Login/loginReducer";

// export const store = createStore(); // add your reducers here

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";



const rootReducer = combineReducers({
  user: reducer,
});

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;