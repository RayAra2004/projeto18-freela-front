import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { NoService, SCBtn, SCMyServices } from "../styles/MyServices.style";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MyServices(){

    const [myServices, setMyServices] = useState();
    const token = localStorage.getItem('token');
    let updatePage = 0;

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(()=> {
        axios.get(`${import.meta.env.VITE_API_URL}/my-services`, config)
            .then(res => setMyServices(res.data))
            .catch(err => console.log(err))
    },[myServices, updatePage])

    function textButton(active){
        if(active) return "Desativar"
        return "Ativar"
    }

    function serviceOnOff(active, service_id){
            axios.put(`${import.meta.env.VITE_API_URL}/services/active`, {active: !active, service_id}, config)
                .then(res =>{
                    updatePage++;
                    console.log(updatePage)
                })
                .catch(err => console.log(err))
    }

    if(myServices === undefined)return <>Carregando...</>
    if(myServices.length === 0) return(
        <SCMyServices>
            <Header/>
            <div className="body">
                <Menu/>
                <NoService>
                    <p>Você não poussui serviços!!</p>
                </NoService>
            </div>
        </SCMyServices>
    )
     
    return(
        <SCMyServices>
            <Header/>
            <div className="body">
                <Menu/>
                <div className="services">
                    {myServices && myServices.map( service =>
                        <div className="service" key={service.id}>
                            <Link to={`/services/${service.id}`}>
                                <img src={service.url}/>
                                <div>
                                    <h1>{service.name}</h1>
                                    <p>R$ {String(service.price.toFixed(2)).replace('.', ',')}</p>
                                </div>
                            </Link>
                            <div>
                                <SCBtn a = {service.active} onClick={() => serviceOnOff(service.active, service.id)}>{textButton(service.active)}</SCBtn>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SCMyServices>
    )
}