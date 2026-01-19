const KEY = "collab-board";

export const loadBoard = () => {
  return JSON.parse(localStorage.getItem(KEY));
};

export const saveBoard = (notes) => {
  localStorage.setItem(KEY, JSON.stringify(notes));
};
