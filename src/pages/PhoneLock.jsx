import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone } from 'lucide-react';
import './PhoneLock.css';

const PhoneLock = () => {
  const [pin, setPin] = useState('');
  const [showPhone, setShowPhone] = useState(false);
  const [screenOn, setScreenOn] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Phone float in animation
    setTimeout(() => setShowPhone(true), 300);
    // Screen turns on
    setTimeout(() => setScreenOn(true), 1500);
  }, []);

  const handleNumberClick = (num) => {
    if (pin.length < 4) {
      setPin(pin + num);
      setError('');
    }
  };

  const handleClear = () => {
    setPin('');
    setError('');
  };

  const handleSubmit = () => {
    if (pin.length === 4) {
      if (pin === '0909') {
        // Correct PIN
        navigate('/recovery');
      } else {
        // Wrong PIN
        setError('Access Denied');
        setShake(true);
        setTimeout(() => {
          setShake(false);
          setPin('');
        }, 600);
      }
    }
  };

  return (
    <div className="phone-lock-screen">
      <div className="phone-lock-content">
        <p className="step-label">STEP 1 OF 4</p>
        
        <div className={`phone-container ${showPhone ? 'show' : ''}`}>
          <div className="phone-frame">
            <div className="phone-notch"></div>
            
            <div className={`phone-screen ${screenOn ? 'on' : 'off'} ${shake ? 'shake' : ''}`}>
              {screenOn && (
                <>
                  <div className="lock-header">
                    <div className="time">09:09</div>
                    <div className="date">September 9</div>
                  </div>

                  <div className="pin-status">
                    {error ? (
                      <div className="error-message">{error}</div>
                    ) : (
                      <div className="pin-required">PIN Required</div>
                    )}
                  </div>

                  <div className="pin-dots">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`pin-dot ${pin.length > i ? 'filled' : ''}`}
                      />
                    ))}
                  </div>

                  <div className="pin-keyboard">
                    <button className="key-button" onClick={() => handleNumberClick('1')}>1</button>
                    <button className="key-button" onClick={() => handleNumberClick('2')}>2</button>
                    <button className="key-button" onClick={() => handleNumberClick('3')}>3</button>
                    <button className="key-button" onClick={() => handleNumberClick('4')}>4</button>
                    <button className="key-button" onClick={() => handleNumberClick('5')}>5</button>
                    <button className="key-button" onClick={() => handleNumberClick('6')}>6</button>
                    <button className="key-button" onClick={() => handleNumberClick('7')}>7</button>
                    <button className="key-button" onClick={() => handleNumberClick('8')}>8</button>
                    <button className="key-button" onClick={() => handleNumberClick('9')}>9</button>
                    <button className="key-button empty"></button>
                    <button className="key-button" onClick={() => handleNumberClick('0')}>0</button>
                    <button className="key-button empty"></button>
                  </div>
                  
                  <div className="action-buttons">
                    <button className="action-btn clear-btn" onClick={handleClear}>Clear</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <button 
          className={`external-submit-btn ${pin.length === 4 ? 'active' : ''}`}
          onClick={handleSubmit}
          disabled={pin.length !== 4}
        >
          Submit PIN
        </button>
      </div>
    </div>
  );
};

export default PhoneLock;