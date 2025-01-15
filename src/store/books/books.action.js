import BOOKS_ACTION_TYPES from './books.type';

const setBooksPreview = preview => {
  return { type: BOOKS_ACTION_TYPES['SET_BOOKS_PREVIEW'], payload: preview };
};

export {
          setBooksPreview
        };

