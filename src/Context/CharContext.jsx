import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../CustomHook/useLocalStorage";

export const CharContext = createContext({});

export default function CharProvider({ children }) {
  const [addChar, setAddChar] = useState(false);
  const [charName, setCharName] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [charClass, setCharClass] = useState();
  const [maxHP, setMaxHP] = useState();
  const [bonus, setBonus] = useState("");
  const [charBonus, setCharBonus] = useState([]);
  const [character, setCharacter] = useLocalStorage("characters", []);

  const closeAddChar = () => {
    setAddChar(false);
  };

  const addBonus = () => {
    setCharBonus((prev) => [...prev, bonus]);
    setBonus("");
  };

  const removeBonus = (bonus) => {
    const filteredBonus = charBonus.filter((item) => item !== bonus);
    setCharBonus(filteredBonus);
  };

  const addCharacter = () => {
    const charInfo = {
      name: charName,
      image: imageUrl,
      class: charClass,
      hp: maxHP,
      attributes: charBonus,
    };
    setCharacter((prev) => [...prev, charInfo]);
    setCharName("");
    setImageUrl("");
    setCharClass("");
    setMaxHP("");
    setCharBonus([]);
  };

  const deleteChar = (name) =>{
    const filteredList = character.filter((char) => char.name !== name);

    setCharacter(filteredList);
  }

  return (
    <CharContext.Provider
      value={{
        addChar,
        setAddChar,
        closeAddChar,
        charName,
        setCharName,
        bonus,
        setBonus,
        charBonus,
        addBonus,
        removeBonus,
        imageUrl,
        setImageUrl,
        charClass,
        setCharClass,
        maxHP,
        setMaxHP,
        addCharacter,
        character,
        deleteChar
      }}
    >
      {children}
    </CharContext.Provider>
  );
}
