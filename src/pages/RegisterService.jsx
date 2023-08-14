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
            </SCFormRegister>
        </SCRegisterService>
    )
}