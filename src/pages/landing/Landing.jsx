import { Link } from "react-router-dom";
import "./landing.css";
import demo from "../../assets/demo.png";
const Landing = () => {
  return (
    <div className="page Landing-page">
      <div className="landingpage-details">
        <h2>Real-Time Collaborative Whiteboard</h2>
        <p>
          A frontend-only project demonstrating real-time collaboration, dynamic
          sticky notes, and optimistic UI updates.
        </p>
        <section>
          <h3>Features</h3>

          <ul>
            <li>Drag and drop sticky notes.</li>
            <li>Add new notes dynamically.</li>
            <li>Edit, Delete sticky notes.</li>

            <li>Simulated multi-user collaboration (same browser).</li>
          </ul>
        </section>
        <Link to="/board" className="button">
          Open Whiteboard
        </Link>
      </div>
      <div className="landingpage-image">
        <img src={demo} alt="" />
      </div>
    </div>
  );
};

export default Landing;
