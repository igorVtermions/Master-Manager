import { createContext, useState } from "react";

export const CharContext = createContext({});

export default function CharProvider({children}){
    
    const [addChar, setAddChar] = useState(false);
    const [charName, setCharName] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [charClass, setCharClass] = useState();
    const [maxHP, setMaxHP] = useState();
    const [bonus, setBonus] = useState('');
    const [charBonus, setCharBonus] = useState([]);

    const closeAddChar = () =>{
        setAddChar(false)
    }

    const addBonus = () =>{
        setCharBonus((prev) => [...prev, bonus])
        setBonus('');
    }

    const removeBonus = (bonus) =>{
        const filteredBonus = charBonus.filter((item) => item !== bonus);
        setCharBonus(filteredBonus);
    }
    
    return(
        <CharContext.Provider value={{addChar, setAddChar, closeAddChar, charName, setCharName, bonus, setBonus, charBonus, addBonus, removeBonus, imageUrl, setImageUrl, charClass, setCharClass, maxHP, setMaxHP}}>
            {children}
        </CharContext.Provider>
    )
}