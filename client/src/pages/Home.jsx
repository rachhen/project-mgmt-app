import React from "react";
import AddClientModoal from "../components/AddClientModoal";
import AddProjectModoal from "../components/AddProjectModoal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

function Home() {
  return (
    <div>
      <div className="d-flex gap-3 mb-4">
        <AddClientModoal />
        <AddProjectModoal />
      </div>
      <Projects />
      <Clients />
    </div>
  );
}

export default Home;
