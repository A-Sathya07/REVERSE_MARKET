import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import ProjectsPage from "./pages/ProjectsPage";
import LogoutPage from "./pages/LogoutPage";
import "./App.css";

// Passes onLogin to LoginPage so it can go to the dashboard after login/register
function LoginRoute() {
  const navigate = useNavigate();

  return <LoginPage onLogin={() => navigate("/dashboard", { replace: true })} />;
}

// Blocks pages for people who are not signed in
function ProtectedRoute({ children }) {
  const isLoggedIn = !!sessionStorage.getItem("user_id");
  return isLoggedIn ? children : <Navigate to="/LoginPage" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginPage" replace />} />
        <Route path="/LoginPage" element={<LoginRoute />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <ProjectsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;