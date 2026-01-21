# Real Time Collaborative Whiteboard (Frontend Only)

A **real-time collaborative whiteboard** built using **React**, designed to showcase strong frontend fundamentals such as state management, drag-and-drop interactions, controlled inputs, and real-time synchronization **without a backend**.

---

## Live Demo & Repository

- **Live application:** https://venugopalsp95.github.io/whiteboard/

- **GitHub Repository:** https://github.com/venugopalsp95/whiteboard

---

## Screenshots

### Home page

[Home Page](./src/assets/screenshots/home.png)

### Whiteboard Page

[Whiteboard](./src/assets/screenshots/whiteboard.png)

### About Page

[About Page](./src/assets/screenshots/about.png)

---

## Features

- Create sticky notes with custom text
- Each note gets a unique pastel color (HSL-based)
- Edit notes inline
- Delete notes
- Drag & drop notes freely
- Notes are constrained within the viewport (`vw` / `vh`)
- Data persistence using `localStorage`
- Real-time sync across browser tabs using `BroadcastChannel`
- Responsive full-screen whiteboard

---

## Tech Stack

- **React (JavaScript)**
- **React Hooks**
- **React Query**
- **CSS**
- **localStorage**
- **BroadcastChannel API**

> ❌ No backend  
> ❌ No database  
> ❌ No WebSockets

This project intentionally focuses on **frontend-only architecture**.

---

## Folder Structure

```text
src/
├── components/
│ ├── navbar/
│ │ ├──Navbar.jsx
│ │ └──navbar.css
│ ├── stickynotes/
│ │ ├── Stickynote.jsx
│ │ └── stickynote.css
│ ├── whiteboardcanvas/
│ │ ├── Whiteboardcanvas.jsx
│ │ └── whiteboardcanvas.css
├── hools/
│ ├── useBoard.jsx
│ ├── useUpdateNote.jsx
│ └── useBroadcast.jsx
├── data/
│ └── initialBoard.js
├── pages/
│ ├── about/
│ │ ├──About.jsx
│ │ └──about.css
│ ├── landing/
│ │ ├── Landing.jsx
│ │ └── landing.css
│ ├── whiteboard/
│ │ ├── Whiteboard.jsx
│ │ └── whiteboard.css
├── routes/
│ └── AppRoutes.jsx
├── styles/
│ └── index.css
├── utils/
│ └── storage.js
├── App.jsx
└── main.jsx
```

---

## Key Concepts Demonstrated

### Controlled Inputs

All inputs (add/edit note) use controlled components with React state.

### Immutable State Updates

Notes are updated immutably to ensure predictable re-renders.

### Drag & Drop Logic

- Calculates cursor offset on drag start
- Converts viewport coordinates to canvas-relative positions
- Clamps note position to screen boundaries

### Real-Time Collaboration (Frontend Only)

Uses the **BroadcastChannel API** to sync state changes across multiple browser tabs — simulating multi-user collaboration without a backend.

### Persistence

All board data is saved to `localStorage`, ensuring data survives refreshes.

---

## Real-Time Sync Explained

When a note is added, edited, moved, or deleted:

1. The board state updates locally
2. Changes are saved to `localStorage`
3. Updates are broadcast to other open tabs
4. Other tabs receive and apply the update instantly

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/venugopalsp95/whiteboard.git

npm install

npm run dev
```

---

## How to Test Real-Time Sync

1. Open the app in **two browser tabs**
2. Add / edit / drag a note in one tab
3. Changes instantly appear in the other tab

---

## Future Improvements

- User-based cursors
- Zoom
- Backend integration
- Undo / redo
- Color picker per note

---

## Author

**Venugopal S P**
React Frontend Developer

---
