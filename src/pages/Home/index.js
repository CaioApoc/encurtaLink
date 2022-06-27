import {useState} from "react"
import { FiLink } from "react-icons/fi"
import "./home.css"

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";

import api from "../../services/api"
import { getLinksSave, saveLink } from "../../services/storeLinks";

function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink(){
    try{
      const response = await api.post("/shorten", {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)
      saveLink("@encurtaLink", response.data)
      setLink("")

      // console.log(response)

    }catch{
      alert("Ops, parece que algo nao deu certo!");
      setLink("");
    }
  }


  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="imagem da logo" />
        <h1>EncurtaLink</h1>
        <span>Cole seu link aqui para encurtar!</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF"/>
          <input value={link} placeholder="Cole seu link aqui!" onChange={(evento) => setLink(evento.target.value)}/>
        </div>

        <button onClick={handleShortLink}>Encurtar Link!</button>
      </div>

      <Menu/>

      {showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}
      
    </div>
  );
}

export default Home;