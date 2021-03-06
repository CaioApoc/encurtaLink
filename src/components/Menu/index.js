import "./menu.css";
import { Link } from "react-router-dom"
import {BsYoutube,BsInstagram} from "react-icons/bs"

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://www.youtube.com">
                <BsYoutube size={24} color="#FFF" />
            </a>
            <a className="social" href="https://www.instagram.com">
                <BsInstagram size={24} color="#FFF" />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}