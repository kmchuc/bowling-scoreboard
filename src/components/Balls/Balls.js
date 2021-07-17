import React, { useState } from 'react';

import {
    InputContainer,
    InputBox,
    InputButton,
    TooHighAlert,
} from './styled';

const Balls = ({setGameBoard, gameBoard, setStartGame}) => {
    const [tooHigh, setTooHigh] = useState(false);

    // **too many functions in one component, looks messy, move over to helper file!!**

    // calculates the sum for current frame based on curr position
    function sumScore(currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const score2 = currGameScore.gameScores[currGameScore.position][1];
        const currFrameRolls = [score1, score2];
        const prevFrame = currGameScore.gameScores[currGameScore.position - 1];
        const currFrame = currGameScore.frameScore;
        let totalFrameScore = currFrameRolls.reduce((acc, score) => {
            acc += parseInt(score);
            return acc
        }, 0);
        // if sum = 10, set first frame to equal 0, and 'flag' curr frame as spare
        if (totalFrameScore === 10){
            currGameScore.gameScores[currGameScore.position][0] = 10;
            currGameScore.gameScores[currGameScore.position][1] = 0;
            currGameScore.spare = true;            
        }
        // if there's a prev frame, add it to sum for total current score
        if (prevFrame){
            totalFrameScore += currGameScore.frameScore[currGameScore.position - 1];
        }
        console.log('totalFrameScore', totalFrameScore);
        // adds curr total sum to totalFrameScore array in obj
        currFrame.push(totalFrameScore);
        return currGameScore;
    }

    // checks if flag for isStrike is true, calculates total score with next two rolls in next frame
    function isStrike(position, currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const score2 = currGameScore.gameScores[currGameScore.position][1];
        const prevFrameScore = currGameScore.frameScore[position - 1];
        const newPrevFrameScore = prevFrameScore + score1 + score2;
        currGameScore.frameScore[position - 1] = newPrevFrameScore;
        currGameScore.frameScore[position] = newPrevFrameScore + score1 + score2;
        currGameScore.strike = false;
        return currGameScore;
    }

    // checks if flag for isSpare is true, calculates total score with next roll in next frame
    function isSpare(position, currGameScore){
        const score1 = currGameScore.gameScores[currGameScore.position][0];
        const prevFrameScore = currGameScore.frameScore[position - 1];
        const newPrevFrameScore = prevFrameScore + score1;
        currGameScore.frameScore[position - 1] = newPrevFrameScore;
        currGameScore.spare = false;
        return currGameScore;
    }

    // updates current score for current frame after each submit
    function updateCurrentScore(){
        let currGameScore = {...gameBoard};
        // if gameScores[9][1], and spare isn't true, set bonus frames to 0 and return total score
        if (currGameScore.gameScores[9][0]){
            if (currGameScore.spare === false){
                currGameScore.gameScores[10][0] = 0;
                currGameScore.gameScores[10][1] = 0;
            }
            setGameBoard(currGameScore);
            localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
            // totally skips the 10th array's total sum, need to figure out why (something's skipping) 
            currGameScore = sumScore(currGameScore);
        }
        // *once total loads, and user presses submit again, the local storage should clear and window should reload*
        // if (currGameScore.position === 12){
        //     if (currGameScore.gameScores[currGameScore.position - 1]){
        //     localStorage.clear();
        //     window.location.reload();
        //     }
        // }

        // if ball hasn't been 'rolled' yet, then set input(ballScore) to gameScore array
        if (currGameScore.gameScores[currGameScore.position][0] === undefined){
            if (ballScore === 10){
                currGameScore.gameScores[currGameScore.position][0] = 10;
                currGameScore.gameScores[currGameScore.position][1] = 0;
                currGameScore.strike = true;
                currGameScore = sumScore(currGameScore);
            } else{
                currGameScore.gameScores[currGameScore.position][0] = ballScore;
                // spares only happen on the second roll so check for spare flag here
                if (currGameScore.spare === true){
                    currGameScore = isSpare(currGameScore.position, currGameScore);
                }
            }
        }else{
            const ball1 = parseInt(currGameScore.gameScores[currGameScore.position][0]);
            // checking to see if user's input is too high, if so little alert pops up, and number isn't pushed into obj's arrays
            if ((ball1 + ballScore) > 10){
                setTooHigh(true);
                return
            } else{
                currGameScore.gameScores[currGameScore.position][1] = ballScore
            }
            currGameScore = sumScore(currGameScore);
            // strikes only happen on first roll, checking for 'true' flag
            if (currGameScore.strike === true){
                currGameScore = isStrike(currGameScore.position, currGameScore);
            }
            setGameBoard(currGameScore);
            localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
        }
        // if there's already a number set @ [1]th postion, then move onto next frame
        if (currGameScore.gameScores[currGameScore.position][1] || currGameScore.gameScores[currGameScore.position][1] === 0){
            currGameScore.position += 1;
        }
        setGameBoard(currGameScore);
        localStorage.setItem('gameBoard', JSON.stringify(currGameScore));

        // if the current position is 9 and isStrike is true, then run function but stop there, also check if isSpare is true
        if (currGameScore.position === 9){
            if(currGameScore.strike === true){
                currGameScore = isStrike(currGameScore.position, currGameScore);
                setGameBoard(currGameScore);
                localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
                return
            }
            if (currGameScore.spare === true){
                currGameScore = isSpare(currGameScore.position, currGameScore);
                setGameBoard(currGameScore);
                localStorage.setItem('gameBoard', JSON.stringify(gameBoard));
                return
            }
        }
    }

    // saves default ball score to local storage
    const [ballScore, setBallScore] = useState("");
    
    const onChange = event => {
        if(tooHigh === true){
            event.preventDefault();
        }
        setTooHigh(false);
        setBallScore(parseInt(event.target.value));
    }

    return(
        <InputContainer>
            <InputBox value={ballScore} type='number' onChange={onChange} name='score' min='0' max='10'/>
            {tooHigh && 
            <TooHighAlert>
                input too high
            </TooHighAlert>
            }
            <InputButton onClick={updateCurrentScore}>
                submit
            </InputButton>
        </InputContainer>
    )
}

export default Balls;