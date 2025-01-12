import USERS_ACTION_TYPES from './users.type';

const NULL_USER = { role: '' };

const USERS_INITIAL_STATE = {
  currentUser: NULL_USER,
  usersList: [],
  totalElements: 0
};

const usersReducer = (state = USERS_INITIAL_STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case USERS_ACTION_TYPES['SET_CURRENT_USER']:
      return { ...state, currentUser: payload };
    case USERS_ACTION_TYPES['LOGOUT']:
      return { ...state, currentUser: NULL_USER };
    case USERS_ACTION_TYPES['SET_ACTIVE_USERS_LIST']:
      const { users, totalElements } = payload;
      return { ...state, usersList: users, totalElements };
    default:
      return state;
  }

};

export default usersReducer;
