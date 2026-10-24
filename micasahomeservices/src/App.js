import { useEffect, useState } from 'react';
import './App.css';

// Fake "loading" steps shown under the logo while the real site is being built.
export const LOADING_MESSAGES = [
  'Sweeping the floors',
  'Drilling pilot holes',
  'Measuring twice',
  'Cutting once',
  'Finding the stud',
  'Patching the drywall',
  'Tightening loose screws',
  'Unclogging the drain',
  'Painting the trim',
  'Waiting for the paint to dry',
  'Leveling the shelves',
  'Oiling the squeaky door',
  'Caulking the tub',
  'Mowing the lawn',
  'Looking for the 10mm socket',
];

export const MESSAGE_INTERVAL_MS = 2200;

function App() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((index) => (index + 1) % LOADING_MESSAGES.length);
    }, MESSAGE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <p className="App-banner">
        <span className="App-banner-dot" aria-hidden="true" />
        Website under construction
      </p>

      <main className="App-main">
        <img
          src={`${process.env.PUBLIC_URL}/micasa-animated.svg`}
          className="App-logo"
          alt="Mi Casa Home Services logo with a broom sweeping"
        />

        <div className="App-loading" role="status" aria-live="polite">
          {/* key forces a remount so the fade-in replays for every message */}
          <p key={messageIndex} className="App-loading-text">
            {LOADING_MESSAGES[messageIndex]}
            <span className="App-loading-dots" aria-hidden="true">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </p>
          <div className="App-loading-bar" aria-hidden="true">
            <div className="App-loading-bar-fill" />
          </div>
        </div>
      </main>

      <footer className="App-footer">
        <p>Mi Casa Home Services &middot; Our new website is on its way. Check back soon!</p>
      </footer>
    </div>
  );
}

export default App;
