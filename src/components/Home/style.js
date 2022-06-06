import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
`

export const Logo = styled.img`
    width: 85px;
    height: 60px;
    margin: 40px 0 0 40px;
`

export const Profile = styled.img`
    align-self: flex-start;
    margin: 20px 20px 0 0;
`

export const Container = styled.div`
    height: 100vmax;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    font-family: 'Roboto', sans-serif;

    h1 {
        color: #FFFFFF;
        margin-bottom: 20px;
        margin-top: 10px;
        font-weight: 700;
        font-size: 26px;
    }
`

export const Links = styled.div`
    width: 80%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Perks = styled.div`
    width: 100%;
    margin-top: 40px;
    button {
        width: 100%;
        height: 60px;
        background-color: #FF4791;
        border: none;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 700;
        margin-top: 10px;
    }
`

export const Options = styled.div`
    margin-bottom: 40px;
`

export const Change = styled.button`
        width: 100%;
        height: 60px;
        background-color: #FF4791;
        border: none;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 700;
        margin-top: 10px;
`

export const Cancel = styled.button`
        width: 100%;
        height: 60px;
        background-color: #FF4747;
        border: none;
        border-radius: 8px;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 700;
        margin-top: 10px;
`