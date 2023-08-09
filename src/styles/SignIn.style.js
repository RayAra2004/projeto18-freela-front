import { styled } from "styled-components";


export const SCSignIn = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
        margin-top: 20px;
    }

    a{
        text-decoration: none;
    }
`

export const SCFormSignIn = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
        width: 300px;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    button{
        margin-top: 10px;
        width: 310px;
        height: 30px;
        border: none;
        border-radius: 5px;
        color: #FFFFFF;
        background-color: #5B5B5B;
        font-weight: bold;
    }
`