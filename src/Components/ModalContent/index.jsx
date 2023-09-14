import React from 'react'
import { Container, Title } from './styles'
import Input from '../Input'
import Btn from '../Btn'

export default function ModalContent() {
  return (
    <Container>
        <Title>Adicionar Personagem</Title>
        <form>
            <Input placeholder="Nome do personagem" />
            <Input placeholder="Url da imagem de perfil" />
            <Input placeholder="Classe" />
            <Input placeholder="HP Maximo" />
            <Btn>Criar Personagem</Btn>
        </form>
    </Container>
  )
}
