import BOOKS_ACTION_TYPES from './books.type';

const BOOKS_INITIAL_STATE = {
  booksPreview: {}
};

const booksReducer = (state = BOOKS_INITIAL_STATE, action = {}) => {

  const { type, payload } = action;

  switch (type) {
    case BOOKS_ACTION_TYPES['SET_CURRENT_USER']:
      return { ...state, currentUser: payload };
    default:
      return state;
  }

};

export default booksReducer;
