import {Link} from 'react-router-dom';
import {useContext} from 'react';

import {TodoContext} from '../../Contexts/todoContext';
export function TodoCard(todo ) {
  const { id, title, description, isCompleted,isDone,isSingle } = todo;
  const {handleSingleTodo} = useContext(TodoContext);

  
  return (
    <div className="bg-purple-600 w-4/5 rounded-lg m-2 p-2 mx-auto text-white" >
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="">{description}</p>
      <p className=" ">Status : {isCompleted ? 'Done' : 'Not Done'}</p>
      {isDone &&
      (
        <Link className="bg-rose-400 p-1 rounded-md my-2" to={`/todo/${id}`} onClick={()=>handleSingleTodo(todo)} >Expend Todo</Link>
      )}
      {isSingle && 
      <Link className="bg-rose-400 p-1 rounded-md my-2" to={`/todo/done`} >Back</Link>
      }
    </div>
  );
}
