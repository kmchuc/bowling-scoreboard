import React, { useState } from 'react';
import Balls from '../Balls/Balls';

import {
    ScoreTable,
    FrameNum,
    FrameScore,
    ScoreSubmit,
    Caption
} from './styled';

function tryParse(value){
    try{
        return JSON.parse(value);
    } catch{
        return value
    }
}

const Frames = (props) => {
    // catches latest version of the gameBoard
    const [gameBoard, setGameBoard] = useState(tryParse(localStorage.getItem('gameBoard')));

    return(
        <div>
            <ScoreTable>
                <tr>
                    <th>&nbsp;</th>
                    <FrameNum>1</FrameNum>
                    <FrameNum>2</FrameNum>
                    <FrameNum>3</FrameNum>
                    <FrameNum>4</FrameNum>
                    <FrameNum>5</FrameNum>
                    <FrameNum>6</FrameNum>
                    <FrameNum>7</FrameNum>
                    <FrameNum>8</FrameNum>
                    <FrameNum>9</FrameNum>
                    <FrameNum>10</FrameNum>
                    <FrameNum>BONUS</FrameNum>
                    <FrameNum>TOT</FrameNum>
                </tr>
                <tr>
                    <FrameScore color={'#f39b79'}>User</FrameScore>
                    {console.log('gameBoard.gameScores', gameBoard.gameScores)}
                    <FrameScore color={'white'}>{gameBoard.gameScores[0][0]} / {gameBoard.gameScores[0][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[1][0]} / {gameBoard.gameScores[1][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[2][0]} / {gameBoard.gameScores[2][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[3][0]} / {gameBoard.gameScores[3][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[4][0]} / {gameBoard.gameScores[4][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[5][0]} / {gameBoard.gameScores[5][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[6][0]} / {gameBoard.gameScores[6][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[7][0]} / {gameBoard.gameScores[7][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[8][0]} / {gameBoard.gameScores[8][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[9][0]} / {gameBoard.gameScores[9][1]}</FrameScore>
                    <FrameScore color={'white'}>{gameBoard.gameScores[10][0]} / {gameBoard.gameScores[10][1]}</FrameScore>
                    <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[10]}</FrameScore>
                </tr>
                <tr>
                <th></th>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[0]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[1]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[2]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[3]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[4]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[5]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[6]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[7]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[8]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[9]}</FrameScore>
                <FrameScore color={'#2ce3ff'}>{gameBoard.frameScore[10]}</FrameScore>
                </tr>
            </ScoreTable>
            <ScoreSubmit>
                <Caption>Enter Score:</Caption> 
                <Balls setGameBoard={setGameBoard} gameBoard={gameBoard}/>
            </ScoreSubmit>
        </div>
    )
}

export default Frames;