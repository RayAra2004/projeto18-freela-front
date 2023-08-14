import { styled } from "styled-components";

export const SCMyServices = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    .body{
        width: 80%;
        margin-top: 110px;
        display: flex;

        .services{
            margin-top: 30px;
            margin-left: 30px;
            height: 100%;
            overflow-y: scroll;

            .service{
                margin-bottom: 40px;
                display: flex;

                a{
                    text-decoration: none;
                    color: black;
                    display: flex;
                }
                img{
                    width: 200px;
                    border-radius: 5px;
                }

                h1, p{
                    margin-left: 30px;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 20px;
                }

                p{
                    margin-top: 10px;
                    font-size: 15px;
                }

                button{
                    margin-left: 15px;
                    width: 150px;
                    height: 30px;
                    border: none;
                    border-radius: 5px;
                    color: white;
                    font-family: 'Montserrat', sans-serif;
                    font-size: 18px;
                    cursor: pointer;
                }
            }
        }
    }


    .services::-webkit-scrollbar {
        width: 12px;          
    }

    ::-webkit-scrollbar-track {
        background: white;        
    }

    ::-webkit-scrollbar-thumb {
        background-color: #c9c9c9;    
        border-radius: 20px;       
        border: 3px solid white;  
    }
` 

export const SCBtn = styled.button`
    background-color: ${props => props.a ? 'red' : 'green'};
`

export const NoService = styled.div`
    display: flex;
    width: 90%;
    margin-left: 40px;
    justify-content: center;
    align-items: center;

    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
    }
`