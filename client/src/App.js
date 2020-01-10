import React, { useState } from 'react';
import './App.css';
import Select from 'react-select';
const traitJson = require('./traits.json');
const {
  createCombination,
  createComposition,
  traitCheck
} = require('./helpers/main');

function App() {
  const [synergyCount, setSynergyCount] = useState(0);
  const [choice, setChoice] = useState({});
  const [team, setTeam] = useState();

  function createTeam() {
    const array = createCombination(choice);
    const teams = createComposition(array);
    const _ = traitCheck(teams).slice(0, 10);

    setTeam(_);
  }

  function handleChange(e, name) {
    setSynergyCount(synergyCount + 1);
    //If synergy count is greater than 9? Do something
    setChoice(prevState => ({ ...prevState, [name]: e }));
  }

  function renderTraitOptions() {
    return traitJson.map(trait => {
      const numOfTraits = trait.sets;
      return (
        <div className="traitOption">
          <label htmlFor="traitName">
            {trait.name}
            <Select
              value={trait.name}
              options={trait.sets}
              onChange={e => handleChange(e, trait.name)}
              placeholder="Please choose a number"
            />
            <option value="">Please choose a number</option>
            {numOfTraits.map(num => (
              <option value={`${num}`}>{num}</option>
            ))}
          </label>
        </div>
      );
    });
  }

  function renderTeam() {
    return (
      team &&
      team.map(array =>
        array.map(obj => (
          <div
            style={{
              color: 'black',
              textAlign: 'center',
              marginBottom: '10px'
            }}
          >
            {obj.team.join(' ')}
          </div>
        ))
      )
    );
  }

  return (
    <div className="App">
      <section className="hero-section">
        <h1>Team Fighter Tactics Composition Builder</h1>
        <h3>Total Synergys: {synergyCount}</h3>
        <section className="trait-section">{renderTraitOptions()}</section>
      </section>

      <button onClick={() => createTeam()}>Get Team</button>

      <section className="team-display">
        <h2>Your Team</h2>
        {renderTeam()}
      </section>
    </div>
  );
}

export default App;
