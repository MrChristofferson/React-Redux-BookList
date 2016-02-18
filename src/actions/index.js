export function selectBook(book) {
  // selectBook is an ActionCreator, needs to return action
  // (obj) with type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
};
