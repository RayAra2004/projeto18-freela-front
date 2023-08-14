import { useContext, useEffect, useState } from "react";
import TokenContext from "../contexts/Token_User";
import { useNavigate } from "react-router-dom";
import { SCFormRegister, SCRegisterService } from "../styles/RegisterService.style";
import axios from "axios";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function RegisterService(){

    const {token, setToken} = useContext(TokenContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [photos, setPhotos] = useState([]);
    const [category, setCategory] = useState();
    const [categorySel, setCategorySel] = useState('');
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


        if(selectedCategory.length === 0){
            alert("Selecione pelo menos 1 categoria!!");
            return;
        }

        if(photos.length === 0){
            alert("Adicione pelo menos 1 foto!!");
            return;
        }

        const data = {
            name, price, description, url: photos, fk_category_id: selectedCategory
        };

        axios.post(`${import.meta.env.VITE_API_URL}/services`, data, config)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    function addCategory(){
        setSelectedCategory([...selectedCategory ,categorySel]);
        setCategorySel("")
    }

    function addPhoto(){
        setPhotos([...photos, photo])
        setPhoto('')
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
                    <textarea id="description" name="description" cols={30} rows={8}  placeholder="Descrição do Serviço" value={description} onChange={e => setDescription(e.target.value)}/>    
                                    
                </div>
                <div className="service">
                    <label htmlFor="category">Categorias</label>
                    <div className="category">   
                        <select id="category" value={categorySel} onChange={e => setCategorySel(e.target.value)}>
                            <option value={""}></option>
                            {category && category.map(c =>
                                <option value={c.id}>{String(c.name_category).toUpperCase()}</option>
                            )}
                        </select>
                        <ion-icon name="add-circle-outline" onClick={() => addCategory()}></ion-icon>
                    </div>
                    <label htmlFor="url">Fotos</label>
                    <div className="category">
                        <input id="url" name="url" placeholder="https://example.com" type="url" value ={photo} onChange={e => setPhoto(e.target.value)}/>
                        <ion-icon name="add-circle-outline" onClick={() => addPhoto()}></ion-icon>
                    </div>
                            
                    <button>CADASTRAR</button>
                </div>
            </SCFormRegister>
        </SCRegisterService>
    )
}