import { useContext } from "react";
import Btn from "../Components/Btn";
import { Container } from "./style";
import Modal from 'react-modal';
import { CharContext } from "../Context/CharContext";
import './modal.css'
import ModalContent from "../Components/ModalContent";

Modal.setAppElement("#root");

export default function Home(){

    const {addChar, setAddChar, closeAddChar} = useContext(CharContext);

    return(
        <Container>
            <Btn style={{"position": "absolute", "top": "2rem", "right": "2rem"}} onClick={() => setAddChar(true)}>Add Personagem</Btn>
            <h1>Nenhum personagem encontrado...</h1>
            <Modal
            isOpen={addChar}
            onRequestClose={closeAddChar}
            overlayClassName="overlay-modal-add-char"
            className="modal-content"
            >
                <ModalContent/>
            </Modal>
        </Container>
    )
}