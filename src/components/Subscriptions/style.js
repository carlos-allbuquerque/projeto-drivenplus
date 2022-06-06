import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;

    h1 {
        font-size: 32px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 60px;
    }

`
export const Box = styled.div`
    width: 75%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid #7E7E7E;
    border-radius: 12px;
    margin-bottom: 20px;
    padding: 0 15px 0 15px;

    img {
        width: 160px;
        height: 105px;
    }


    
    h2 {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 700;
    }
`