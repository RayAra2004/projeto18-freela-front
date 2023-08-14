import { styled } from "styled-components";
import { BACKGROUND_PAGE } from "../colors/colors";

export const SCHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${BACKGROUND_PAGE};
    font-family: 'Montserrat', sans-serif;
    a{
        text-decoration: none;
    }
    .logo{
        display: flex;
        align-items: center;
        img{
            width: 100px;
        }

        p{
            color:#1EA1A2;
            font-weight: bolder;
            font-size: 25px;
        }
    }

    div:nth-child(2){
        display: flex;
        align-items: center;
        margin-right: 20%;
    }

    input{
        height: 40px;
        width: 400px;
        border: 2px white solid;
        border-radius: 6px;
        margin-right: 10px;
    }

    .filtro{
        margin-left: 40px;
        display: flex;
        align-items: center;
        color: white;

        span{
            margin-left: 5px;
        }
    }

    ion-icon{
        font-size: 30px;
        color: white;
    }
`