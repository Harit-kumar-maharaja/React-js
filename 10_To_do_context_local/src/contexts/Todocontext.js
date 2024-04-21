import { createContext , useContext } from "react";

export const  Todocontext = createContext({
    todos: [
        {
            id : 1 ,
            todo : "Todo msg",
            completed : false,
        }
    ],
    addtodo : (todo) => {},
    updatedtodo : (id , todo) => {},
    deletetodo : (id) => {},
    tooglecomplete : (id) => {}

})

export const usetodo = () => {
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider