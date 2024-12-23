import {NavLink,Routes,Route} from 'react-router-dom';

import './App.css';
import {Todo} from './useReducer/pages/Todo';
import { DoneTodo } from './useReducer/components/todo/Done';
import { OpenTodo } from './useReducer/components/todo/Open';
import SingleTodo from './useReducer/components/todo/SingleTodo';
// import { Reducer1 } from ' ./useReducer/reducer1';

function App() {
  return (
    <div className="App max-w-[1700px] mx-auto text-green-300">
     {/* <Reducer1/> */}
     <div className="flex flex-col">
      <div class="w-full h-1 bg-blue-500 my-2"></div>
      <NavLink to="/todo" className="text-2xl p-2 rounded-lg my-2 mx-auto text-white bg-indigo-800 ">
        Todo List
      </NavLink>
      <Routes>
        <Route path='/todo' element={<Todo />} />
        <Route path='/todo/done' element={<DoneTodo />} />
        <Route path='/todo/open' element={<OpenTodo />} />
        <Route path='/todo/:todoId' element={<SingleTodo/>} />
      </Routes>
      
    </div>
    </div>
  );
}

export default App;
