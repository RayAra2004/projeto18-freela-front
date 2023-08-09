import { useState } from "react";
import { SCFormSignUp, SCSignUp } from "../styles/SignUp.style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const tp_user = 1; //TODO: Alterar

    function register(e){
        e.preventDefault();

        if(password !== confirmPassword) alert("As senhas devem ser iguais!!")

        axios.post(`${import.meta.env.VITE_API_URL}/signUp`, {name, email, password, tp_user})
            .then(res => {
                console.log(res);
                navigate("/login");
            })
            .catch(err => {
                alert(err.message);
            })
    }

    return(
        <SCSignUp>
            <SCFormSignUp onSubmit={e => register(e)}>
                <label htmlFor="name">Nome:</label>
                {/*TODO: Verificar regex */}
                <input placeholder="Digite seu nome" id="name" name="name" 
                    pattern="([^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u02B0-\u036F\u00D7\u00F7\u2000-\u2BFF])+"
                    value={name} onChange={ e => setName(e.target.value)}
                />
                <label htmlFor="email">Email:</label>
                <input placeholder="Digite seu email" id="email" name="email" type="email" 
                    pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                    value={email} onChange={ e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Senha:</label>
                <input placeholder="Digite sua senha" id="password" name="password" type="password" 
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    value={password} onChange={ e => setPassword(e.target.value)}
                />
                <label htmlFor="confirm_password">Confirme sua senha:</label>
                <input placeholder="Confirme sua senha" id="confirm_password" name="confirm_password" type="password" 
                    pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
                    value={confirmPassword} onChange={ e => setConfirmPassword(e.target.value)}
                />
                <button>Cadastrar-se</button>
            </SCFormSignUp>
            <Link to={"/login"}>
                <p>Já possui cadastro? Entre agora!</p>
            </Link>
        </SCSignUp>
    )
}
