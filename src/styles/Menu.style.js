import { styled } from "styled-components";

export const SCMenu = styled.div`

    background-color: #9F9F9F;
    width: 25%;
    height: 100%;
    margin-top: 30px;
    ion-icon{
        font-size: 30px;
    }

    div{
        cursor: pointer;
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        p{
            font-family: 'Montserrat', sans-serif;
            margin-left: 10px;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }

    .logout{
        cursor: pointer;
    }
`