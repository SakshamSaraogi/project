import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneLock from \"./pages/PhoneLock.jsx\";
import LoadingScreen from "./pages/LoadingScreen.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";
import RecoveryProtocol from "./pages/RecoveryProtocol.jsx";
import SavingScreen from "./pages/SavingScreen.jsx";
import TicTacToe from "./pages/TicTacToe.jsx";
import ValentineQuestion from "./pages/ValentineQuestion.jsx";
import HeartLoading from "./pages/HeartLoading.jsx";
import ConnectionEstablished from "./pages/ConnectionEstablished.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path=\"/\" element={<PhoneLock />} />
          <Route path=\"/loading\" element={<LoadingScreen />} />
          <Route path="/error" element={<ErrorScreen />} />
          <Route path="/recovery" element={<RecoveryProtocol />} />
          <Route path="/saving" element={<SavingScreen />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/valentine" element={<ValentineQuestion />} />
          <Route path="/heart-loading" element={<HeartLoading />} />
          <Route path="/established" element={<ConnectionEstablished />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;