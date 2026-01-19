import { NavLink } from "react-router-dom";

import "./style/index.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="whiteboard-container">
        <Navbar />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
