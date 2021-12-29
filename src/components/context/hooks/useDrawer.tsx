import { useState } from "react";

export default function useDrawer() {
    const [drawerFlag, setDrawerFlag] = useState(true)

    function handleModalOpening() {
        setDrawerFlag(!drawerFlag)
    }

    return { handleModalOpening, drawerFlag}


};
