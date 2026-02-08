import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
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

/* 🔒 FORCE RESET ON REFRESH */
function ResetOnRefresh({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload && location.pathname !== "/") {
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <ResetOnRefresh>
        <div className="App">
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
        </div>
      </ResetOnRefresh>
    </BrowserRouter>
  );
}

export default App;
