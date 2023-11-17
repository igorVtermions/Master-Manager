import { useContext } from "react";
import Btn from "../Btn";
import { Container, Ul } from "./styles";
import { IoIosCloseCircle } from "react-icons/io";
import { CharContext } from "../../Context/CharContext";


export default function Card({ char }) {

  const { deleteChar } = useContext(CharContext);

  return (
    <Container>
      <div className="close-btn">
        <IoIosCloseCircle size={30} onClick={() => deleteChar(char.name)} title="Excluir Personagem" />
      </div>
      <img src={char.image} alt="imagem do personamgem" />
      <div className="baseInfo">
        <h1>{char.name}</h1>
        <h3>{char.class}</h3>
      </div>
      <h2>Vida: {char.hp}</h2>
      <Ul>
        {char.attributes.map((item) => 
          <li key={item}>{item}</li>
        )}
      </Ul>
      <Btn className="btn">Item</Btn>
    </Container>
  );
}
