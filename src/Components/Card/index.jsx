import Btn from "../Btn";
import { Container } from "./styles";

export default function Card({ char }) {
  return (
    <Container>
      <img src={char.image} alt="imagem do personamgem" />
        <div className="baseInfo">
        <h1>{char.name}</h1>
        <h3>{char.class}</h3>
        </div>
        <h2>Vida: {char.hp}</h2>
        <ul>
            <li>{char.attributes}</li>
        </ul>
      <Btn className="btn">Item</Btn>
    </Container>
  );
}
