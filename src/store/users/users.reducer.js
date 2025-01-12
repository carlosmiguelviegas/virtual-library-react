import USERS_ACTION_TYPES from './users.type';

const USERS_INITIAL_STATE = {
  currentUser: { role: '' },
  usersList: []
};

const usersReducer = (state = USERS_INITIAL_STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case USERS_ACTION_TYPES['SET_CURRENT_USER']:
      return { ...state, currentUser: payload };
    default:
      return state;
  }

};

export default usersReducer;
