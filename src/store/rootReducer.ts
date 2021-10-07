import { combineReducers } from "redux";
import UserReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;