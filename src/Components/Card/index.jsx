import Btn from "../Btn";
import { Container, Ul } from "./styles";

export default function Card({ char }) {
  return (
    <Container>
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
