const USERS_INITIAL_STATE = {
  currentUser: null,
  usersList: []
};

const usersReducer = (state = USERS_INITIAL__STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case value:
      return { ...state, currentUser: payload };
      break;
    default:
      return state;
      break;
  }

};

export default usersReducer;
