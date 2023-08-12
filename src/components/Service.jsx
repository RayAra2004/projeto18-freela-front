import { Link } from "react-router-dom";
import { SCService } from "../styles/Service.style";

export default function Service(service){
    return(
        <Link to={`/services/${service.id}`}>
           <SCService key={service.id}>
                <img src={service.url}/>
                <p>{service.name}</p>
                <span>R$ {String((service.price).toFixed(2)).replace('.', ',')}</span>
            </SCService> 
        </Link>  
    )
}