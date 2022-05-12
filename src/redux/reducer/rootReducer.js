import { reducer,mediaReducer } from "./reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  reducer,
  mediaReducer
});
