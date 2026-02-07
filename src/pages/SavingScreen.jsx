import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SavingScreen.css';

const SavingScreen = () => {
  const navigate = useNavigate();
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    // Navigate after 3 seconds
    const timer = setTimeout(() => {
      navigate('/tictactoe');
    }, 3000);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="saving-screen">
      <div className="saving-content">
        <h1 className="saving-title">Saving signature{dots}</h1>
        <p className="evidence-text">Evidence secured for future reference</p>
      </div>
    </div>
  );
};

export default SavingScreen;