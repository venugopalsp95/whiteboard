import { useState } from "react";
import { useBoard } from "../../hooks/useBoard";
import "./whiteboardcanvas.css";
import { v4 as uuid } from "uuid";
import { useUpdateNote } from "../../hooks/useUpdateNote";
import StickyNote from "../stickynotes/StickyNote";
const WhiteboardCanvas = () => {
  const { board, updateBoard } = useBoard();
  const { updateNote, deleteNote } = useUpdateNote();
  const [value, setValue] = useState("");

  const generateColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
  };
  const addNote = () => {
    if (!value.trim()) return;

    const newText = {
      id: uuid(),
      text: value,
      x: 150,
      y: 150,
      color: generateColor(),
    };
    (updateBoard([...board, newText]), setValue(""));
  };

  return (
    <div className="canvas">
      <div className="canvas-input">
        <input
          type="text"
          value={value}
          placeholder="Enter Text..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="button" onClick={addNote}>
          + Add Note
        </button>
      </div>
      {board.map((note) => (
        <StickyNote
          key={note.id}
          note={note}
          onUpdate={updateNote}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default WhiteboardCanvas;
