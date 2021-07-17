import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
`;

export const InputBox = styled.input`
    height: 40px;
    width: 50px;
    font-family: W95FA;
    font-size: 20px;
    border: 1px solid black;
`;

export const InputButton = styled.button`
    height: 40px;
    width: 100px;
    font-family: W95FA;
    font-size: 20px;
`;

export const TooHighAlert = styled.p`
    font-family: W95FA;
    font-size: 20px;
    color: white;
    align-text: center;
`;