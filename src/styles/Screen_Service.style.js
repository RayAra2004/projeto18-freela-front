import { styled } from "styled-components";

export const SCService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    font-family: 'Montserrat', sans-serif;
    .images{
        width: 600px;
        margin-right: 200px;
        img{
            width: 100%;
            border-radius: 6px;
        }
    }

    .price{
        width: 300px !important;
        border: 1px black solid;
        border-radius: 4px;
        margin-top: 100px;
        flex-wrap: wrap;
        span{
            margin-right: 130px;
        }

        button{
            cursor: pointer;
            width: 200px;
            height: 40px;
            border: none;
            border-radius: 2px;
            margin-left: 40px;
            background-color: rgb(30, 161, 162);
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 20px;
            font-weight: bolder;
        }
    }

    h1{
        font-weight: bolder;
        font-style: italic;
        font-size: 40px;
    }

    div:nth-child(2){
        display: flex;
        width: 80%;
    }

    .description{
        margin-top: 20px;
        width: 800px;
    }

    .user_info{
        margin-left: 10px;
        text-align: justify;
        width: 100%;

        p, span{
            margin-bottom: 10px;
            margin-right: 0;
        }
    }
`