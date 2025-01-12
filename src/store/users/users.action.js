import USERS_ACTION_TYPES from './users.type';

const setCurrentUser = user => {
  return { type: USERS_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};

export default setCurrentUser;
