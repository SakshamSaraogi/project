import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import './FinalReveal.css';

const FinalReveal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <div className="final-screen">
      <div className={`final-content ${show ? 'show' : ''}`}>
        <div className="hearts-container">
          <Heart className="heart heart-1" fill="#ff6b9d" color="#ff6b9d" />
          <Heart className="heart heart-2" fill="#ff6b9d" color="#ff6b9d" />
          <Heart className="heart heart-3" fill="#ff6b9d" color="#ff6b9d" />
        </div>
        
        <h1 className="final-title">CONNECTION RESTORED</h1>
        <p className="final-message">Valentine Found ❤️</p>
        
        <div className="love-message">
          <p className="signature-confirmed">Signature Confirmed:</p>
          <p className="final-confession">"Saksham Loves You More"</p>
        </div>
        
        <p className="forever-text">Forever and Always 💕</p>
      </div>
    </div>
  );
};

export default FinalReveal;