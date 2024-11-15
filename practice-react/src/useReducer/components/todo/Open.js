import {useContext,useEffect} from 'react'

import { TodoContext } from "../../Contexts/todoContext";
import { TodoCard } from './todoCard';
import { NavLink } from 'react-router-dom';
export function OpenTodo(){
    const {fetchTodo, todoItem } = useContext(TodoContext);

    useEffect(()=>{
        fetchTodo()
    },[])

    const CompletedTodo = todoItem.filter(({isCompleted})=>isCompleted === false);
    
   return(
    <div className="">
        <h1 class="text-center text-2xl text-red-400 font-bold">Open List</h1>
        <NavLink to='/todo' className='bg-pink-500 ml-10 rounded-md text-xl text-white p-1 m-1' >Back</NavLink>
        {CompletedTodo.map((product)=>
        <TodoCard todo={product}  isDone/>
        )}
    </div>

   )
}