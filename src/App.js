import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./App.css";

import LoadingScreen from "./pages/LoadingScreen.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import PhoneLock from "./pages/PhoneLock.jsx";
import RecoveryProtocol from "./pages/RecoveryProtocol.jsx";
import SavingScreen from "./pages/SavingScreen.jsx";
import TicTacToe from "./pages/TicTacToe.jsx";
import ValentineQuestion from "./pages/ValentineQuestion.jsx";
import HeartLoading from "./pages/HeartLoading.jsx";
import ConnectionEstablished from "./pages/ConnectionEstablished.jsx";
import LoveLetter from "./pages/LoveLetter.jsx";

/* 🔐 ROUTE GUARD */
function RouteGuard({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const started = sessionStorage.getItem("flowStarted");

    // If refreshed and not on home → force reset
    if (!started && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return children;
}

function AppRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    // Mark flow started once landing on home
    if (window.location.pathname === "/") {
      sessionStorage.setItem("flowStarted", "true");
    }
  }, []);

  return (
    <RouteGuard>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route path="/error" element={<ErrorScreen />} />
        <Route path="/phonelock" element={<PhoneLock />} />
        <Route path="/recovery" element={<RecoveryProtocol />} />
        <Route path="/saving" element={<SavingScreen />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/valentine" element={<ValentineQuestion />} />
        <Route path="/heart-loading" element={<HeartLoading />} />
        <Route path="/established" element={<ConnectionEstablished />} />
        <Route path="/letter" element={<LoveLetter />} />
      </Routes>
    </RouteGuard>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
