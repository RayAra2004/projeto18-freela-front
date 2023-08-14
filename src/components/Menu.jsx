import { Link } from "react-router-dom";
import { SCMenu } from "../styles/Menu.style";

export default function Menu(){

    function logout(){
        localStorage.removeItem('token')
        location.reload()
    }

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
            <Link to={"/services/cadastro"}>
                <div>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Adicionar Serviço</p>
                </div>
            </Link>
            <div className="logout" onClick={() => logout()}>
                <ion-icon name="log-out-outline"></ion-icon>
                <p>Sair</p>
            </div>
        </SCMenu>
    )
}