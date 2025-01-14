import USERS_ACTION_TYPES from './users.type';

const setCurrentUser = user => {
  return { type: USERS_ACTION_TYPES['SET_CURRENT_USER'], payload: user };
};

const setToken = token => {
  return { type: USERS_ACTION_TYPES['SET_TOKEN'], payload: token };
};

const logoutUser = () => {
  return { type: USERS_ACTION_TYPES['LOGOUT'], payload: null };
};

const getActiveUsersList = list => {
  return { type: USERS_ACTION_TYPES['SET_ACTIVE_USERS_LIST'], payload: list };
};

const disableUser = userId => {
  return { type: USERS_ACTION_TYPES['DISABLE_USER'], payload: userId };
};

export {
          setCurrentUser,
          setToken,
          logoutUser,
          getActiveUsersList,
          disableUser
        };

