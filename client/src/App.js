import React, { useState } from 'react';
import './App.css';
const traitJson = require('./traits.json');

function App() {
  const [synergy, setSynergy] = useState(0);

  function renderTraitOptions() {
    return traitJson.map(trait => {
      const numOfTraits = trait.sets;
      return (
        <div className="traitOption">
          <label htmlFor="traitName">
            {trait.name}
            <select name="name?" id="cool">
              <option value="">Please choose a number</option>
              {numOfTraits.map(num => {
                console.log(trait.name)
                <option value={`${num}`}>{num}</option>
              })}
            </select>
          </label>
        </div>
      );
    });
  }

  return (
    <div className="App">
      <section className="hero-section">
        <h1>Team Fighter Tactics Composition Builder</h1>
        <h3>Total Synergys: {synergy}</h3>
        <section className="trait-section">{renderTraitOptions()}</section>
      </section>

      <section className="team-display">
        <h2>Your Team</h2>
      </section>
    </div>
  );
}

export default App;
