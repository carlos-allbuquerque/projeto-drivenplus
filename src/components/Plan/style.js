import styled from "styled-components";

export const Container = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFFFFF;
    position: relative;

    h1{
        color: #FFFFFF;
        font-size: 32px;
    }

    h3 {
        font-size: 14px;
        margin: 0;
    }
`

export const Return = styled.div`
    width: 100%;
    img {
        margin-top: 20px;
        margin-left: 20px;
    }
`
export const Form = styled.form`
    margin-top: 30px;

    input {
        width: 95%;
        height: 52px;
        font-family: "Lexend Deca";
        padding: 7px;
        
        border: 1px solid #d5d5d5;
        border-radius: 8px;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-top: 10px;
    }

    input::placeholder {
        color: #7E7E7E;
        font-size: 14px;
    }

    button {
        background-color: #FF4791;
        border: none;
        width: 100%;
        height: 62px;
        border-radius: 8px;
        margin-top: 10px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 16px;
    }
`

export const Logo = styled.img`
    width: 180px;
    margin-top: 50px;
`

export const Flex = styled.div`
    display: flex;
`

export const FlexInputs = styled.div`
    display: flex;
    justify-content: space-between; 

    input {
        width: 43%;
    }
`

export const Box = styled.div`
    width: 80%;

    h2 {
        font-size: 16px;
        font-weight: 400px;;
    }
`

export const MContainer = styled.div`
    height: 100%;
    width: 100%;
    display: ${props => props.display};
    flex-direction: column;
    z-index: 1;
    background-color: rgb(0,0,0,0.6);
    position: absolute;
`

export const Message = styled.div`
    height: 210px;
    width: 60%;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    text-align: center;

    h1 {
        color: black;
        font-size: 19px;
    }
`
export const Yes = styled.button`
    width: 40%;
    height: 60px;
    border: none;
    border-radius: 8px;
    background-color: #FF4791;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
`
export const No = styled.button`
    width: 40%;
    height: 60px;
    border: none;
    border-radius: 8px;
    background-color: #CECECE;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 700;
`

export const FlexMessageInputs = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const Exit = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img {
        margin: 20px 20px 0 0;
    }
`

export const Div = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`