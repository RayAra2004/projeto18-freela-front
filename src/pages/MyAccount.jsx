import { useEffect } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { SCMyAccount } from "../styles/MyAccount.style";
import Menu from "../components/Menu";

export default function MyAccount(){
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token') === null) navigate("/login")
    }, []);

    return(
        <SCMyAccount>
            <Header/>
            <div className="body">
                <Menu/>
                <div className="info">
                    Minha conta
                </div>
            </div>
        </SCMyAccount>
    );
}