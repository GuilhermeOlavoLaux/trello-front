import { createContext, useState, useEffect } from "react";
import { api } from '../../api/apiRotes'

const TasksContext = createContext();

function TasksProvider({ children }) {

    const [tasks, setTasks] = useState([])


    async function fetchTasks() {
        const { data } = await api.get('/tasks')
        setTasks(data.userTasks)
    }

    useEffect(() => {
        fetchTasks()
    }, [])


    return (
        <TasksContext.Provider value={{ fetchTasks, tasks }}>
            {children}
        </TasksContext.Provider>
    )
}



export { TasksContext, TasksProvider }