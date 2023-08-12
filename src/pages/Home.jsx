import { useEffect, useState } from "react";
import Header from "../components/Header";
import { SCBody, SCHome } from "../styles/Home.style";
import axios from "axios";
import Service from "../components/Service";

export default function Home(){

    const [services, setServices] = useState(undefined);
    
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/services`)
            .then(res => setServices(res.data))
            .catch(err => console.log(err.message))
    }, [])

    return(
        <SCHome>
            <Header/>
            <SCBody>
                {services && services.map( service =>
                    Service(service)
                )}
            </SCBody>
        </SCHome>
    )
}