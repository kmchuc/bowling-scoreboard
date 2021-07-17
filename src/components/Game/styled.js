import styled from 'styled-components';
import img from './bowling.jpg';

export const GameContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    background-size: cover;
`;