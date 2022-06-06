import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    h3 {
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 400;
        text-decoration: underline;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        width: 320px;
        height: 52px;
        font-family: 'Roboto', sans-serif;
        padding: 7px;
        margin-bottom: 8px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-top: 10px;
    }

    input::placeholder {
        color: #7E7E7E;
        font-family: 'Roboto', sans-serif;
    }

    button {
        background-color: #FF4791;
        border: none;
        width: 335px;
        height: 62px;
        border-radius: 8px;
        margin-top: 20px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 16px;
    }

`
