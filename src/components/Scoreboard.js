import React, { useState } from "react";

const Scoreboard = (props) => {
    const[highScore, setHighScore] = useState(0);
    let currentScore = props.score;
    /*
    if (props.restartScore === true) {
        currentScore = 0;
    }
    */

    if (currentScore > highScore) {
        setHighScore(currentScore);
    }

    return (
        <div>
            <div>Score: {currentScore}</div>
            <div>High Score: {highScore}</div>
        </div>
    );
}

export default Scoreboard;