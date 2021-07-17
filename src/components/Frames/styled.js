import styled from 'styled-components';

export const ScoreTable = styled.table`
    height: 40vh;
    width: 95vw;
    border: 1px solid black;
    background-color: black;
    font-family: W95FA;
`;

export const ScoreTableColumn = styled.th`
    border: outset 1px black;
    width: 100px;
`;

export const FrameNum = styled.th`
    border: outset black 1px;
    background-color: #b1110f;
    color: #f2e78d;
    font-size: 20px;
    width: 100px;
    height: 50px;
`;

export const FrameScore = styled.th`
    height: 100px;
    width: 150px;
    justify-content: space-between;
    color: ${props => props.color};
    background-color: #043bee;
    border: outset 1px white;
    font-size: 25px;
`;

export const ScoreSubmit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    flex-direction: row;
    height: 8vh;
    width: 25%;
    padding: 20px;
    background-color: black;
`;

export const Caption = styled.caption`
    color: white;
    font-family: W95FA;
    font-size: 25px;
`;