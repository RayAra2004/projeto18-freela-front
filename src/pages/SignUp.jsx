import { useState } from "react";
import { SCFormSignUp, SCSignUp } from "../styles/SignUp.style";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function SignUp(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');


    const navigate = useNavigate();
    const tp_user = 1; //TODO: Alterar

    function register(e){
        e.preventDefault();

        if(password !== confirmPassword){
            alert("As senhas devem ser iguais!!");
            return;
        } 

        axios.post(`${import.meta.env.VITE_API_URL}/signUp`, {name, phone, email, password, postcode: cep, city, tp_user})
            .then(res => {
                console.log(res);
                navigate("/login");
            })
            .catch(err => {
                alert(err.message);
            })
    }

    function searchCEP(value) {
        fetch(`https://brasilapi.com.br/api/cep/v2/${value}`)
            .then(res => res.json())
            .then(dados => {
                setCity(dados.city);
            });
    }

    return(
        <SCSignUp>
            <Header/>
            <SCFormSignUp onSubmit={e => register(e)}>
                <div className="user">
                    <label htmlFor="name">Nome:</label>
                    {/*TODO: Verificar regex */}
                    <input placeholder="Digite seu nome" id="name" name="name" 
                        //pattern="([A-z])"
                        value={name} onChange={ e => setName(e.target.value)}
                    />
                    <label htmlFor="phone">Telfone:</label>
                    <input id="phone" name="phone" placeholder="Ex. (99)98888-8888" value={phone} onChange={e => setPhone(e.target.value)} required/>
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
                </div>

                <div className="address">
                    
                    <label htmlFor="cep">CEP:</label>
                    <input id="cep" name="cep" type="number" placeholder={"CEP"} value={cep} onChange={e => { searchCEP(e.target.value); setCep(e.target.value) }} required />
                    
                    <label htmlFor="city">Cidade:</label>
                    <input id="city" name="city" placeholder={"Cidade"} value={city} onChange={e => setCity(e.target.value)} required disabled/>
                </div>
                <div className="confirm">
                    <button>Cadastrar-se</button>
                    <Link to={"/login"}>
                        <p>Já possui cadastro? Entre agora!</p>
                    </Link>
                </div>
                
            </SCFormSignUp>
        </SCSignUp>
    )
}
