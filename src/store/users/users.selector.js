const selectCurrentUser = state => {
  return state['users']['currentUser'];
};

const selectCurrentToken = state => {
  return state['users']['token'];
};

const selectActiveUsersList = state => {
  return state['users']['usersList'];
};

const selectTotalElements = state => {
  return state['users']['totalElements'];
};

export {
          selectCurrentUser,
          selectCurrentToken,
          selectActiveUsersList,
          selectTotalElements
        };
