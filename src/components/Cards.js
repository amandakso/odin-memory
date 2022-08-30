import React, { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/cards.css';

const Cards = (props) => {
    const [deck, setDeck] = useState(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"])
    const generateNewDeck = () => {
        let newNumbers = [];
        while (newNumbers.length < 16) {
            let num = Math.floor(Math.random() * 16);
            num = num.toString();
            let newNum = true;
            for (let i = 0; i < newNumbers.length; i++) {
                if (newNumbers[i] === num) {
                    newNum = false
                };
            };
            if (newNum === true) {
                newNumbers = newNumbers.concat([num])
            } 
        }
        setDeck(newNumbers);
    }
    let cards = deck.map((card) => {
        return <Card onClick={props.onClick} key={card} id={card}/>
    })

    useEffect(() => {
        const handleClick = (e) => {
            if (!Number.isInteger((parseInt(e.target.id)))) {
                return
            } else {
                generateNewDeck();
            }
        }
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [deck])


    return (
        <div className="cardContainer">
            {cards}
        </div>
    );
}

export default Cards;