import { combineReducers } from "redux";
import { ChatBoxReducer } from "../features/ChatBox/ChatBoxReducers";

const rootReducers = combineReducers({
  ChatBoxReducer,
});

export default rootReducers;
