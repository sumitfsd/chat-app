import { UPDATE_MESSAGE } from "./ChatBoxConstants";

export const ChatBoxReducer = (state = {}, action: any) => {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return { ...action.payload };

    default:
      return state;
  }
};
