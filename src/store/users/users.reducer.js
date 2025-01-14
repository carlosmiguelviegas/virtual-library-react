import USERS_ACTION_TYPES from './users.type';

const NULL_USER = { role: '' };

const USERS_INITIAL_STATE = {
  currentUser: NULL_USER,
  token: null,
  usersList: [],
  totalElements: 0
};

const usersReducer = (state = USERS_INITIAL_STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case USERS_ACTION_TYPES['SET_CURRENT_USER']:
      return { ...state, currentUser: payload };
    case USERS_ACTION_TYPES['SET_TOKEN']:
      return { ...state, token: payload };
    case USERS_ACTION_TYPES['LOGOUT']:
      return { ...state, currentUser: NULL_USER };
    case USERS_ACTION_TYPES['REMOVE_TOKEN']:
      return { ...state, token: null };
    case USERS_ACTION_TYPES['SET_ACTIVE_USERS_LIST']:
      const { users, totalElements } = payload;
      return { ...state, usersList: users, totalElements };
    case USERS_ACTION_TYPES['DISABLE_USER']:
      return { ...state, usersList: state['usersList'].filter(user => user['_id'] !== payload) };
    default:
      return state;
  }

};

export default usersReducer;
