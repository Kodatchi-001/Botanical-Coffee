import { useState, createContext } from "react";

export const ListeItems = createContext();

export function ListeProvider({ children }) {
    const [Index_Items, setIndex_Items] = useState([]);

    return (
        <ListeItems.Provider value={{ Index_Items, setIndex_Items }}>
            {children}
        </ListeItems.Provider>
    );
}
