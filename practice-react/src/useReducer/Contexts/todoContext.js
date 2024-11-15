import {createContext, useState,} from 'react';
import {fakeFetch} from '../Api/TodoApi';

export const TodoContext = createContext();
export function TodoContextProvider({children}){

    const [isLoading,setIsLoading] = useState(false);
    const [todoItem,setTodoItem] = useState([]);
    const fetchTodo= async ()=>{
        setIsLoading(true)
        try{
            const response = await  fakeFetch("https://example.com/api/todos");
            setTodoItem(response.data.todos);
            setIsLoading(false);
        }catch(err){
            console.error(err);
            setIsLoading(false)
        }
    }
    
    return(
        <TodoContext.Provider value={{isLoading,fetchTodo,todoItem}} >
            {children}
        </TodoContext.Provider>
    )

}