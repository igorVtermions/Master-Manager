import React, { useContext } from 'react'
import { Container, Title, Bonus, BonusAdded, BonusItem } from './styles'
import Input from '../Input'
import Btn from '../Btn'
import { CharContext } from '../../Context/CharContext'
import { AiOutlineClose } from 'react-icons/ai'

export default function ModalContent() {

  const {charName, setCharName, bonus, setBonus, charBonus, addBonus, removeBonus, imageUrl, setImageUrl, charClass, setCharClass, maxHP, setMaxHP} = useContext(CharContext);

  return (
    <Container>
        <Title>Adicionar Personagem</Title>
        <form onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="Nome do personagem" value={charName} onChange={(e) => setCharName(e.target.value)} />
            <Input placeholder="Url da imagem de perfil" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            <Input placeholder="Classe" value={charClass} onChange={(e) => setCharClass(e.target.value)} />
            <Input placeholder="HP Maximo" value={maxHP} onChange={(e) => setMaxHP(e.target.value)} />
            <Bonus>
              <Input placeholder="Bônus" value={bonus} onChange={(e) => setBonus(e.target.value)}/>
              <Btn onClick={addBonus}>Add</Btn>
            </Bonus>
            <BonusAdded>
              {charBonus.map((bonus) => <BonusItem key={bonus}>{bonus} <AiOutlineClose size={13} onClick={() =>removeBonus(bonus)}/></BonusItem>)}
            </BonusAdded>
            <Btn>Criar Personagem</Btn>
        </form>
    </Container>
  )
}
