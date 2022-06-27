import "./error.css"
import { Link } from "react-router-dom"
import Menu from "../../components/Menu"

export default function Error(){
    return(
        <div className="container-error">
            <img id="image" src="notfound.png" alt="imagem de pagina nao encontrada" />
            <h1 id="notfound">Página não encontrada!</h1>
            <Link id="link-home" to="/">
                Voltar para Home
            </Link>
            <Menu />
        </div>
        
    )
}