import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SCService } from "../styles/Screen_Service.style"
import Header from "../components/Header"

export default function Service(){

    const {id} = useParams()
    const [service, setService] = useState(undefined)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/services/${id}`)
            .then(res => setService(res.data))
            .catch(err => console.log(err.message))
    }, [])

    if(service){
        return(
            <SCService>
                <Header/>
                <div>
                    <div className="images">
                        <img src={service.photos[0].url}/>
                    </div>
                    <div className="price">
                        <span>Total</span>
                        <p>R$ {String(service.price.toFixed(2)).replace('.', ',')}</p>
                        <button>Contratar</button>
                    </div> 
                </div>
                
                <h1>{service.name}</h1>
                
                <span className="description">{service.description}</span>
            </SCService>
        )
    }else{
        return <p>Carregando...</p>
    }
    
}