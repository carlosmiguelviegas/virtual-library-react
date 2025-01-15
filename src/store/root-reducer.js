import { combineReducers } from "redux";

import usersReducer from "./users/users.reducer";
import booksReducer from "./books/books.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  books: booksReducer
});

export default rootReducer;
