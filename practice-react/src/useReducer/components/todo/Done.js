import {useContext,useEffect} from 'react'

import { TodoContext } from "../../Contexts/todoContext";
import { TodoCard } from './todoCard';
import { NavLink } from 'react-router-dom';
export function DoneTodo(){
    const {fetchTodo, todoItem } = useContext(TodoContext);

    useEffect(()=>{
        fetchTodo()
    },[])

    const CompletedTodo = todoItem.filter(({isCompleted})=>isCompleted === true);
   return(

    <div className="">
        <h1 class="text-center text-2xl text-amber-400 font-bold">Done List</h1>
        <NavLink to='/todo' className='bg-pink-500 ml-10 rounded-md text-xl text-white p-1 m-1' >Back</NavLink>
        {CompletedTodo.map((product)=>
        <TodoCard todo={product} isDone/>
        )}
    </div>

   )
}