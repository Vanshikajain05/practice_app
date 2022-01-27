import {
  ADD_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
  EDIT_USERS_SUCCESS,
  GET_USERS_SUCCESS,
} from "./Action";

const myReducer = (state = { users: [] }, action) => {
  console.log(action);

  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload.data };

    case ADD_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload.data],
      };
    case DELETE_USERS_SUCCESS:
      const newUsers = state.users.filter((e) => e.id !== action.payload);
      console.log(newUsers);
      return {
        ...state,
        users: newUsers,
      };

    case EDIT_USERS_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default myReducer;
