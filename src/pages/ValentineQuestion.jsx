import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ValentineQuestion.css';

const ValentineQuestion = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '60%', left: '70%' });
  const [hoverCount, setHoverCount] = useState(0);
  const [noButtonVisible, setNoButtonVisible] = useState(true);
  const [showPoof, setShowPoof] = useState(false);
  const navigate = useNavigate();

  const positions = [
    { top: '60%', left: '70%' },
    { top: '40%', left: '80%' },
    { top: '75%', left: '25%' },
  ];

  const handleNoHover = () => {
    if (hoverCount < 2) {
      setHoverCount(prev => prev + 1);
      setNoButtonPosition(positions[hoverCount + 1]);
    } else {
      // Final hover - poof effect
      setShowPoof(true);
      setTimeout(() => {
        setNoButtonVisible(false);
        setShowPoof(false);
      }, 500);
    }
  };

  const handleYesClick = () => {
    navigate('/heart-loading');
  };

  return (
    <div className="valentine-screen">
      <div className="valentine-content">
        <p className="step-label">STEP 3 OF 3</p>
        <h1 className="valentine-title">FINAL VERIFICATION</h1>
        <p className="waiting-text">Saksham is waiting...</p>

        <h2 className="question-text">Will you be my Valentine?</h2>

        <div className="buttons-container">
          <button className="yes-button" onClick={handleYesClick}>
            Yes
          </button>
          
          {noButtonVisible && (
            <button
              className={`no-button ${showPoof ? 'poof' : ''}`}
              style={{
                position: 'absolute',
                top: noButtonPosition.top,
                left: noButtonPosition.left,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={handleNoInteraction} // desktop
              onClick={handleNoInteraction}      // mobile
            >
              No
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ValentineQuestion;