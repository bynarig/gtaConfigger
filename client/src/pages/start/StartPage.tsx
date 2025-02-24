import {useState} from 'react';
import './StartPage.scss';

export default function StartPage() {
  const [showInitialText, setShowInitialText] = useState(true);

  const handleClick = () => {
    setShowInitialText(false);
  };

  const handleButtonPress = (path: string) => {
    window.location.href = path; // Use window.location.href for navigation
  };

  return (
    <div className="start-page">
      {showInitialText ? (
        <>
          <h1>
            Welcome to
            <br /> GTA V configurator
          </h1>
          <button className="arrow-button" onClick={handleClick} />
        </>
      ) : (
        <>
          <h1>
            Describe your
            <br /> gameplay
          </h1>
          <div className="button-container">
            <div className="button-1" onClick={() => handleButtonPress('/main')}>
              <img src="sun.svg" alt="" />
              <span className="button-text">chilly</span>
            </div>
            <div className="button-2" onClick={() => handleButtonPress('/main')}>
              <img src="flexible.svg" alt="" />
              <span className="button-text">manual setup</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
