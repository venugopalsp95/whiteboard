import { useState } from "react";
import WhiteboardCanvas from "../../components/whiteboardcanvas/WhiteboardCanvas";
import "./whiteboard.css";
const Whiteboard = () => {
  return (
    <div className="page whiteboard-page">
      <WhiteboardCanvas />
    </div>
  );
};

export default Whiteboard;
