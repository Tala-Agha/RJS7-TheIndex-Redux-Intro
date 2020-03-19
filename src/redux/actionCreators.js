export const addAuthor = () => {
  return {
    type: "ADD AUTHOR"
  };
};

export const deleteAuthor = author => {
  return {
    type: "DELETE AUTHOR",
    payload: author
  };
};
