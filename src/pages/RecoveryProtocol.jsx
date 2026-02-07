import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecoveryProtocol.css';

const RecoveryProtocol = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    setIsDrawing(true);
    setHasSignature(true);
    
    const x = e.type.includes('mouse') ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const y = e.type.includes('mouse') ? e.clientY - rect.top : e.touches[0].clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    
    const x = e.type.includes('mouse') ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const y = e.type.includes('mouse') ? e.clientY - rect.top : e.touches[0].clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleSubmit = () => {
    if (hasSignature) {
      navigate('/saving');
    }
  };

  return (
    <div className="recovery-screen">
      <div className="recovery-content">
        <p className="step-label">STEP 1 OF 3</p>
        <h1 className="recovery-title">RECOVERY PROTOCOL</h1>
        
        <div className="protocol-box">
          <p className="restore-text">To restore connection, please acknowledge:</p>
          <p className="confession-text">"Saksham Loves You More"</p>
          
          <p className="sign-instruction">Sign below to confirm ↓</p>
          
          <canvas
            ref={canvasRef}
            className="signature-canvas"
            width={600}
            height={200}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
        </div>
        
        <button 
          className={`submit-button ${hasSignature ? 'active' : ''}`}
          onClick={handleSubmit}
          disabled={!hasSignature}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RecoveryProtocol;