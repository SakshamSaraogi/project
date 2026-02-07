import { useEffect, useState } from 'react';
import './ConnectionEstablished.css';

const ConnectionEstablished = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

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
      </div>
    </div>
  );
};

export default ConnectionEstablished;