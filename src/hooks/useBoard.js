import { useQuery, useQueryClient } from "@tanstack/react-query";
import { loadBoard, saveBoard } from "../utils/storage";
import { initialBoard } from "../data/initialBoard";
import { channel } from "./useBroadcast";

export const useBoard = () => {
  const queryClient = useQueryClient();

  useQuery({
    queryKey: ["board"],
    queryFn: () => loadBoard() || initialBoard,
  });

  channel.onmessage = () => {
    queryClient.invalidateQueries(["board"]);
  };
  const updateBoard = (notes) => {
    saveBoard(notes);
    queryClient.setQueryData(["board"], notes);
    channel.postMessage("sync");
  };

  return {
    board: queryClient.getQueryData(["board"]) || [],
    updateBoard,
  };
};
