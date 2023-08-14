import { styled } from "styled-components";

export const SCRegisterService = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    h1{
        margin-bottom: 30px;
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
    }
`

export const SCFormRegister = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 1000px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number]{
        -moz-appearance: textfield;
    }


    label{
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        margin-bottom: 5px;
    }

    input{
        width: 300px;
        height: 30px;
        border-radius: 5px;
        border: 1px black solid;
        font-family: 'Montserrat', sans-serif;
    }

    input, textarea{
        margin-bottom: 20px;
    }

    .service{
        display: flex;
        flex-direction: column;
        margin-right: 50px;

        select{
            width: 310px;
            height: 30px;
            border-radius: 5px;
        }
    }

    div{
        button{
            width: 310px;
            height: 50px;
            border: none;
            border-radius: 5px;
            background-color: rgb(30, 161, 162);
            color: white;
            font-size: 25px;
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
        }
    }

    .category{
        display: flex;
        align-items: center;
        justify-content: center;
        ion-icon{
            font-size:25px;
            margin-left: 3px;
            margin-top: -15px;
            cursor: pointer;
        }

        select{
            margin-bottom: 10px;
        }
    }
`