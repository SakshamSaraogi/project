import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ValentineQuestion.css';

const ValentineQuestion = () => {
  const navigate = useNavigate();

  const [moveCount, setMoveCount] = useState(0);
  const [noStyle, setNoStyle] = useState({});
  const [showPoof, setShowPoof] = useState(false);
  const [showNo, setShowNo] = useState(true);

  const positions = [
    { top: '55%', left: '65%' },
    { top: '40%', left: '20%' },
    { top: '70%', left: '80%' },
  ];

  const handleNoInteraction = () => {
    if (moveCount < 2) {
      const next = positions[moveCount + 1];
      setMoveCount(prev => prev + 1);

      setNoStyle({
        position: 'absolute',
        top: next.top,
        left: next.left,
        transform: 'translate(-50%, -50%)',
      });
    } else {
      setShowPoof(true);
      setTimeout(() => {
        setShowNo(false);
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

          {showNo && (
            <button
              className={`no-button ${showPoof ? 'poof' : ''}`}
              style={noStyle}
              onClick={handleNoInteraction}     // 📱 mobile
              onMouseEnter={handleNoInteraction} // 🖥 desktop
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
