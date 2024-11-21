import {useContext} from 'react';
import { Link } from "react-router-dom";

import {ForumContext} from '../Context/forumContext';
export function QuestionCard(ques){
    // const ans = useParams()
    const {id,question,index} = ques;
    const {handleAnswer} = useContext(ForumContext)
  return (
    <div key={id} className='w-[70%] mx-auto' >
        <h1 className="text-3xl mt-4">{index+1}.{question}</h1>
        <Link className='m-4 p-1 bg-green-400 text-red-700 rounded-lg font-semibold' >upVote</Link>
        <Link className='m-4 p-1 bg-red-400 text-black rounded-lg font-semibold'>downVote</Link>
        <Link className='m-4 p-1 bg-green-400 text-red-700 rounded-lg font-semibold' to={`/question/${id}`} onClick={()=>handleAnswer(ques)} >Answer</Link>
    </div>
  )
}

