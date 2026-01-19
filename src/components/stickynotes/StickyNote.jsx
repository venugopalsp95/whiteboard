import { useState } from "react";
import "./stickynote.css";
import editicon from "../../assets/edit_black.png";
import deleteicon from "../../assets/delete_black.png";

const NOTE_WIDTH = 180;
const NOTE_HEIGHT = 120;

const StickyNote = ({ note, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note.text);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleDragStart = (e) => {
    const rect = e.target.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const handleDragEnd = (e) => {
    const canvas = document.querySelector(".canvas").getBoundingClientRect();
    if (!canvas) return;
    let newX = e.clientX - canvas.left - offset.x;
    let newY = e.clientY - canvas.top - offset.y;

    newX = Math.max(0, Math.min(newX, canvas.width - NOTE_WIDTH));
    newY = Math.max(0, Math.min(newY, canvas.height - NOTE_HEIGHT));

    onUpdate({
      ...note,
      x: newX,
      y: newY,
    });
  };

  const saveEdit = () => {
    (onUpdate({ ...note, text: text }), setEditing(false));
  };

  return (
    <div
      className="note"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{
        left: note.x,
        top: note.y,
        backgroundColor: note.color,
      }}
    >
      {editing ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={saveEdit}
          autoFocus
        />
      ) : (
        <p className="note-text">{String(note.text)}</p>
      )}
      <div className="note-actions">
        <button onClick={() => setEditing(true)}>
          <img src={editicon} />
        </button>
        <button onClick={() => onDelete(note.id)}>
          <img src={deleteicon} />
        </button>
      </div>
    </div>
  );
};

export default StickyNote;
