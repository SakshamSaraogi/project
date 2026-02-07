import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import './HeartLoading.css';

const HeartLoading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/established');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="heart-loading-screen">
      <div className="hearts-wave">
        {[0, 1, 2, 3, 4].map((index) => (
          <Heart
            key={index}
            className="wave-heart"
            style={{ animationDelay: `${index * 0.2}s` }}
            fill="#e85d75"
            color="#e85d75"
          />
        ))}
      </div>
    </div>
  );
};

export default HeartLoading;