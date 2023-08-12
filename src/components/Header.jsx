import { SCHeader } from "../styles/Header.style";
import logo from "./../assets/logo.jpeg";

export default function Header(){
    return(
        <SCHeader>
            <div className="logo">
                <img src={logo}/>
                <p>HUB SERVICES</p>
            </div>
            <div>
                <input placeholder="Pesquisar..."/>
                <ion-icon name="search-outline"></ion-icon>
                <div className="filtro">
                    <ion-icon name="filter-circle-outline"></ion-icon>
                    <span>Filtrar</span>
                </div>
            </div>
            <div>
                <p>Minha Conta</p>
            </div>

        </SCHeader>
    );
}