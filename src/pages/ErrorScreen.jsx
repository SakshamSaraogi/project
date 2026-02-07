import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorScreen.css';

const ErrorScreen = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const handleRecovery = () => {
    navigate('/phonelock');
  };

  return (
    <div className={`error-screen ${show ? 'show' : ''}`}>
      <div className="error-content">
        <h2 className="error-label">CRITICAL ERROR</h2>
        <h1 className="error-code">404</h1>
        <p className="error-message">Valentine Not Found</p>
        <button className="recovery-button" onClick={handleRecovery}>
          Attempt Recovery
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;