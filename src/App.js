import './App.css';
import React, { useState } from "react";
import Cards from './components/Cards';
import Scoreboard from './components/Scoreboard';

function App() {
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [score, setScore] = useState(0);

  const updateClickedNumbers = (e) => {
    if (e.target.id === null) {
      return
    } else {
      let newNum = e.target.id;
      let isNew = true;
      for (let i = 0; i < clickedNumbers.length; i++) {
        if (clickedNumbers[i] === newNum) {
          isNew = false;
          // restart Score
          setClickedNumbers([]);
          setScore(0);
          return;
        }
      }
      if (isNew === true) {
        setClickedNumbers(clickedNumbers.concat([newNum]));
        setScore(score + 1);
      }
    }
  }

  return (
    <div>
      <h2>Animal Kingdom Memory Card Game</h2>
      <div>Get points by clicking on different animals, but only click on each animal once! Try to get all 16 animals! </div>
      <Scoreboard score={score}/>
      <Cards onClick={updateClickedNumbers}/>
    </div>
  );
}

export default App;
