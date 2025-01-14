const selectCurrentUser = state => {
  return state['users']['currentUser'];
};

const selectActiveUsersList = state => {
  return state['users']['usersList'];
};

const selectTotalElements = state => {
  return state['users']['totalElements'];
};

export {
          selectCurrentUser,
          selectActiveUsersList,
          selectTotalElements
        };
