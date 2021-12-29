import { createContext} from "react";
import useDrawer from "./hooks/useDrawer";

const Context = createContext();

function DrawerProvider({ children }) {

    const { handleModalOpening, drawerFlag } = useDrawer()

    return (
        <Context.Provider value={{ drawerFlag, handleModalOpening }}>
            {children}
        </Context.Provider>
    )
}



export { Context, DrawerProvider }