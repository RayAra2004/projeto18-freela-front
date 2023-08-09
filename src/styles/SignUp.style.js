import { styled } from "styled-components";

export const SCSignUp = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SCFormSignUp = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 300px;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    button{
        width: 310px;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: #5B5B5B;
        color: #FFFFFF;
        font-weight: bold;
    }
`