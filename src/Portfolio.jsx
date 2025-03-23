import React from "react";
import profileImage from "./assets/profile.png";  // Image Import कर

const Portfolio = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <img src={profileImage} alt="Profile" />
    </div>
  );
};

export default Portfolio;
import TechStack from "./TechStack";

function App() {
  return (
    <div>
      <TechStack />
    </div>
  );
}

export default App;
