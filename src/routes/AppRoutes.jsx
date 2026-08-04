import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";

export default function AppRoutes() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/project/:id"
        element={<ProjectDetails />}
      />

    </Routes>
  );
}