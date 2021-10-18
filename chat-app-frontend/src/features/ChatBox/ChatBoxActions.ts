import { UPDATE_MESSAGE } from "./ChatBoxConstants";

export const updateMessage = (
  encrypt: Boolean,
  text: string,
  cypher: string
) => {
  return {
    type: UPDATE_MESSAGE,
    payload: {
      encrypt,
      text,
      cypher,
    },
  };
};
