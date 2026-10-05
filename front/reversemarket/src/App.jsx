import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import RequirementsPage from "./pages/RequirementsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/projects" element={
          <ProtectedRoute>
            <ProjectsPage />
          </ProtectedRoute>
        } />

        <Route path="/requirements" element={
          <ProtectedRoute>
            <RequirementsPage />
          </ProtectedRoute>
        } />  

      </Routes>
    </BrowserRouter>
  );
}

export default App;