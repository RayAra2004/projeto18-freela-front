import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/Token_User";
import { useNavigate } from "react-router-dom";
import { SCFormRegister, SCRegisterService } from "../styles/RegisterService.style";
import axios from "axios";
import Header from "../components/Header";

export default function RegisterService(){

    const {token, setToken} = useContext(TokenContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [photos, setPhotos] = useState([]);
    const [category, setCategory] = useState();
    const [selectedCategory, setSelectedCategory] = useState([]);
    
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [state, setState] = useState('Selecione seu Estado');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    
    

    
    useEffect(() => {
        if(localStorage.getItem('token') === null){
            if(token === null){
                navigate("/login");
            }else{
                localStorage.setItem('token', token)
            }
        }else{
            setToken(localStorage.getItem('token'));
        }

        axios.get(`${import.meta.env.VITE_API_URL}/category`)
            .then(res => setCategory(res.data))
            .catch(err => console.log(err))
    }, [])

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function searchCEP(value) {
        fetch(`https://brasilapi.com.br/api/cep/v2/${value}`)
            .then(res => res.json())
            .then(dados => {
                setCity(dados.city);
                setNeighborhood(dados.neighborhood);
                setState(dados.state);
                setStreet(dados.street);
            });
    }

    function createService(e){
        e.preventDefault();



        const data = {
            name, price, description, url: photos, fk_category_id: [8], address_id: 1
        };

        axios.post(`${import.meta.env.VITE_API_URL}/services`, data, config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    
    return(
        <SCRegisterService>
            <Header/>
            <h1>Casdatro de Novo Serviço</h1>
            <SCFormRegister onSubmit={e => createService(e)}>
                <div className="service">
                    <label htmlFor="name">Nome</label>
                    <input id="name" name="name" placeholder="Nome do Serviço" value={name} onChange={e => setName(e.target.value)}/>
                    <label htmlFor="price">Preço</label>
                    <input id="price" name="price" placeholder="Preço do Serviço" value={price} onChange={e => setPrice(e.target.value)}/>
                    <label htmlFor="description">Descrição</label>
                    <textarea id="description" name="description" cols={43} rows={8}  placeholder="Descrição do Serviço" value={description} onChange={e => setDescription(e.target.value)}/>    
                    <label htmlFor="category">Categorias</label>
                    <select id="category">
                        <option value={""}></option>
                        {category && category.map(c =>
                            <option value={c.id}>{String(c.name_category).toUpperCase()}</option>
                        )}
                    </select>                
                </div>
                <div className="service">
                    <label htmlFor="url1">Fotos</label>
                    <input id="url1" name="url" placeholder="https://example.com" type="url" value={photos[0]} onChange={e => setPhotos([...photos, e.target.value])}/>
                    <input name="url" placeholder="https://example.com" type="url" value={photos[1]} onChange={e => setPhotos([...photos, e.target.value])}/>
                    <input name="url" placeholder="https://example.com" type="url" value={photos[2]} onChange={e => setPhotos([...photos, e.target.value])}/>
                    <input name="url" placeholder="https://example.com" type="url" value={photos[3]} onChange={e => setPhotos([...photos, e.target.value])}/>
                    <input name="url" placeholder="https://example.com" type="url" value={photos[4]} onChange={e => setPhotos([...photos, e.target.value])}/>
                    <button>CADASTRAR</button>
                </div>
                {/*
                <div className="address">

                    <div>
                        <label htmlFor="street">Logradouro</label>
                        <input id="street" name="street" placeholder={"Logradouro"} value={street} onChange={e => setStreet(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="number">Número</label>
                        <input id="number" name="number" type="number" placeholder={"Número"} value={number} onChange={e => setNumber(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="city">Cidade</label>
                        <input id="city" name="city" placeholder={"Cidade"} value={city} onChange={e => setCity(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="neighborhood">Bairro</label>
                        <input id="neighborhood" name="neighborhood" placeholder={"Bairro"} value={neighborhood} onChange={e => setNeighborhood(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" name="cep" type="number" placeholder={"CEP"} value={cep} onChange={e => { searchCEP(e.target.value); setCep(e.target.value) }} required />
                    </div>
                    <div>
                        <label htmlFor="uf">Estado</label>
                        <select id="uf" name="uf" value={state} onChange={e => setState(e.target.value)}>
                            <option value="Selecione seu Estado"></option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    
                </div>
                */}
            </SCFormRegister>
        </SCRegisterService>
    )
}