import { createContext, useState } from "react";

export const CharContext = createContext({});

export default function CharProvider({children}){
    
    const [addChar, setAddChar] = useState(false);

    const closeAddChar = () =>{
        setAddChar(false)
    }
    
    return(
        <CharContext.Provider value={{addChar, setAddChar, closeAddChar}}>
            {children}
        </CharContext.Provider>
    )
}