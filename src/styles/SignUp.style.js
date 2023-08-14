import { styled } from "styled-components";

export const SCSignUp = styled.div`
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

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number]{
        -moz-appearance: textfield;
    }
`

export const SCFormSignUp = styled.form`
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
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

    .user{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .address{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 30px;

        select{
            width: 300px;
            height: 30px;
            margin-top: 10px;
        }
    }

    .confirm{
        margin-left: 20px;
    }
`