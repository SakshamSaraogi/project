import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConnectionEstablished.css';

const ConnectionEstablished = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  const handleContinue = () => {
    navigate('/letter');
  };

  return (
    <div className="established-screen">
      <div className={`established-content ${show ? 'show' : ''}`}>
        <h1 className="established-title">Connection Established!</h1>
        
        <div className="couple-illustration">
          <img 
            src="/images/meme.png" 
            alt="Couple" 
            className="couple-image"
          />
        </div>
        
        <div className="love-messages">
          <p className="love-text left-text">Suku 💓 Sanu</p>
          <p className="love-text right-text">Valentine Couple &lt;3</p>
        </div>
        <button className="continue-btn" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConnectionEstablished;