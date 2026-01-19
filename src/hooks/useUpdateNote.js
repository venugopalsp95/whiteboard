import { useBoard } from "./useBoard";

export const useUpdateNote = () => {
  const { board, updateBoard } = useBoard();

  const updateNote = (updated) => {
    updateBoard(board.map((note) => (note.id === updated.id ? updated : note)));
  };

  const deleteNote = (id) => {
    updateBoard(board.filter((note) => note.id !== id));
  };
  return { updateNote, deleteNote };
};
