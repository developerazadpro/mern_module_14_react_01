import React, { useState } from 'react';

function App() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(document.getElementById('textarea').value);
  };

  return (
    <div className="App">
      <header>
        <h1>My React Application</h1>
      </header>
      <main>
        <button onClick={handleButtonClick}>Display Text</button>
        <textarea id="textarea" rows="4" cols="50"></textarea>
        <div>{displayText}</div>
      </main>
      <footer>
        <p>Favorite Quote: "Be the change you wish to see in the world." - Mahatma Gandhi</p>
      </footer>
    </div>
  );
}

export default App;
