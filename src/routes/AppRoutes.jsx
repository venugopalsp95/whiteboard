import Landing from "../pages/landing/Landing";
import Whiteboard from "../pages/whiteboard/Whiteboard";
import About from "../pages/about/About";
import { Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Landing />} />
      <Route path="/whiteboard" element={<Whiteboard />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
