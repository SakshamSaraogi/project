import { useState } from "react";
import { Heart, X } from "lucide-react";
import "./LoveLetter.css";

const LoveLetter = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="love-letter-screen">
      {/* ENVELOPE */}
      <div className={`envelope-container ${opened ? "opened" : ""}`}>
        <div className="envelope">
          <div className="envelope-body" />

          {/* white flap */}
          <div className={`envelope-flap ${opened ? "opened" : ""}`} />

          {/* seal */}
          {!opened && (
            <div className="envelope-seal">
              <Heart size={20} fill="#d63384" color="#d63384" />
            </div>
          )}
        </div>

        {!opened && (
          <button className="open-btn" onClick={() => setOpened(true)}>
            Open Me
          </button>
        )}
      </div>

      {/* LETTER */}
      {opened && (
        <div className="letter-card">
          <button className="close-btn" onClick={() => setOpened(false)}>
            <X size={22} />
          </button>

          <h2 className="letter-title">My Dearest Valentine,</h2>
              
              <div className="letter-content">
                <p>Just like you found these hidden hearts, you've found the deepest parts of my soul.</p>
                
                <p>Every moment with you is a surprise I cherish, a gift I never want to stop opening.</p>
                
                <p>Thank you for being my adventure, my comfort, and my love.</p>
                
                <p className="letter-closing">
                  Happy Valentine's Day! <Heart className="inline-heart" size={18} fill="#d63384" color="#d63384" />
                </p>
                
                <p className="letter-signature">- Yours forever</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoveLetter;
