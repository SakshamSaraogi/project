import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) {
          clearInterval(interval);
          setTimeout(() => navigate("/error"), 500);
          return 99;
        }
        if (prev > 90) return prev + 0.5;
        if (prev > 70) return prev + 1;
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">ESTABLISHING CONNECTION</h1>

        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="progress-info">
          <p className="progress-text">{Math.floor(progress)}%</p>
          <p className="connecting-text">Connecting...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
