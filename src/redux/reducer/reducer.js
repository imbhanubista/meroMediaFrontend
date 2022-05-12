import { MEDIA_DATA, USER_DATA } from "../constrants/constrants";

const initState = {};
const initMedia = {};
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case USER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const mediaReducer = (state = initMedia, action) => {
  switch (action.type) {
    case MEDIA_DATA:
      return action.payload;
    default:
      return state;
  }
};
