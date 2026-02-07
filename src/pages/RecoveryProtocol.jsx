import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecoveryProtocol.css';

const RecoveryProtocol = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // ✅ FIX 1: Proper canvas scaling for mobile & desktop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.scale(dpr, dpr);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  // ✅ FIX 2: Unified mouse + touch coordinates
  const getCanvasCoords = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  // ✅ FIX 3: Correct drawing handlers
  const startDrawing = (e) => {
    e.preventDefault();

    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getCanvasCoords(e);

    setIsDrawing(true);
    setHasSignature(true);

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();

    const ctx = canvasRef.current.getContext('2d');
    const { x, y } = getCanvasCoords(e);

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
        <p className="step-label">STEP 2 OF 4</p>
        <h1 className="recovery-title">RECOVERY PROTOCOL</h1>

        <div className="protocol-box">
          <p className="restore-text">
            To restore connection, please acknowledge:
          </p>

          <p className="confession-text">
            "Saksham Loves You More"
          </p>

          <p className="sign-instruction">
            Sign below to confirm ↓
          </p>

          <canvas
            ref={canvasRef}
            className="signature-canvas"
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
