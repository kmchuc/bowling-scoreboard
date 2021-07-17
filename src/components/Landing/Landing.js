import React from 'react';
import {
    LandingButton
} from './styled';

// object created to save in local storage, works as the 'backend' in the frontend
const gameBoard = {
    gameScores: [ [], [], [], [], [], [], [], [], [], [] , [] ],
    position: 0,
    frameScore: [],
    strike: false,
    spare: false,
}

const Landing = ({setStartGame}) => {
    // when user clicks start game button, startGame state changes allowing Game to show and initializes the object
    const onClick = () => {
        localStorage.setItem('startGame', true);
        localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
        setStartGame(true);
    }

    return(
        <LandingButton onClick={onClick}>
            Let's Start Bowling!
        </LandingButton>
    )
}

export default Landing;