import { Link } from "react-router-dom";
import { SCMenu } from "../styles/Menu.style";

export default function Menu(){
    return(
        <SCMenu>
            <Link to={"/meus-favoritos"}>
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <p>Favoritos</p>
                </div>
            </Link>
            <Link to={"/meus-servicos"}>
                <div>
                    <ion-icon name="folder-open-outline"></ion-icon>
                    <p>Meus Serviços</p>
                </div>
            </Link>
            <Link to={"/minha-conta"}>
                <div>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <p>Minha Conta</p>
                </div>
            </Link>
        </SCMenu>
    )
}