import { useEffect } from "react";

export const channel = new BroadcastChannel("board-sync");

export const useBroadcast = (onMessage) => {
  useEffect(() => {
    channel.onmessage = onMessage;
    return () => channel.close();
  }, [onMessage]);
};
