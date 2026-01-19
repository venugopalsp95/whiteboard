import "./about.css";
const About = () => {
  return (
    <div className="page about-container">
      <h2>About This Project</h2>
      <p className="about-intro">
        This is a frontend-focused Real-Time Collaborative Whiteboard build
        using React. The goal of this project is to demonstrate modern frontend
        architecture, real-time UI,updates, and clean state management without
        relying on a backend.
      </p>
      <section>
        <h3>How Real-Time Collaboration Works</h3>
        <p>
          This project does not use a backend. Instead, it simulates real-time
          collaboration using browser-native technologies:
        </p>
        <ul>
          <li>
            <strong>React Query</strong> manages shared board state and caching.
          </li>
          <li>
            <strong>localStorage</strong> acts as a persistent data source.
          </li>
          <li>
            <strong>BroadcastChannel API</strong> syncs updates across browser
            tabs in real time.
          </li>
        </ul>
        <p>
          When a user updates a note, the change is immediately reflected in
          other open tabs, simulating mutiple users collaborating in real time.
        </p>
      </section>
      <section>
        <h3>Features</h3>
        <ul>
          <li>Create, edit, delete and drag sticky notes.</li>
          <li>Real-time synchronization across multiple browser tabs.</li>
          <li>Optimistic UI updates for smooth user experience.</li>
          <li>Clean and responsive UI.</li>
        </ul>
      </section>

      <section>
        <h3>Future Improvements</h3>
        <ul>
          <li>
            WebSocket or Firebase integration for real multi-device users.
          </li>
          <li>User presence indicators.</li>
          <li>Undo / redo functionality.</li>
          <li>Export board as image or JSON.</li>
        </ul>
      </section>
      <p className="footer">
        This project is designed to highlight frontend engineering skills,
        architecture thinking, adn real-time UI patterns.
      </p>
    </div>
  );
};

export default About;
