import { Link, useNavigate } from "react-router-dom";
import { SCFormSignIn, SCSignIn } from "../styles/SignIn.style";
import { useContext, useState } from "react";
import axios from "axios";
import TokenContext from "../contexts/Token_User";
import Header from "../components/Header";

export default function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {setToken} = useContext(TokenContext);

    function login(e){
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_URL}/signIn`, { email, password})
            .then(res => {
                
                navigate("/");
                setToken(res.data.token);
                localStorage.setItem('token', res.data.token)
            })
            .catch(err => alert(err.message))
    }

    return(
        <SCSignIn>
            <Header/>
            <SCFormSignIn onSubmit={ e => login(e)}>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" placeholder="Digite seu email"
                    pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                    value={email} onChange={ e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha:</label>
                <input id="password" name="password" type="password" placeholder="Digite sua senha"
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    value={password} onChange={ e => setPassword(e.target.value)}
                />
                <button>Entrar</button>
            </SCFormSignIn>
            <Link to={"/cadastro"}>
                <p>Ainda não possui cadastro? Cadastre-se!</p>
            </Link>
            
        </SCSignIn>
    )
}