import { createContext, useState } from "react";

const Context = createContext();



function DrawerProvider({ children }) {

    const [drawerFlag, setDrawerFlag] = useState(false)

    function handleModalOpening(){
        setDrawerFlag(!drawerFlag)
    }



    return (
        <Context.Provider value={{ drawerFlag, handleModalOpening }}>
            {children}
        </Context.Provider>
    )
}



export { Context, DrawerProvider }