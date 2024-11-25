import {useContext} from 'react'
import {ForumContext} from '../Context/forumContext';
import { Link } from 'react-router-dom';


export function Answer(){
    const {answer} = useContext(ForumContext);
    console.log( answer)

    return(
        <div className="relative min-h-[50vh]">
            <h1 className="text-2xl font-semibold text-lime-300 my-4 bg-pink-500 px-20 py-2 inline-block rounded-xl">Answer</h1>
            <p className="text-xl pb-4">{answer.answer}</p>
            <Link to='/question' className="absolute bottom-4 left-4 text-2xl font-semibold text-white my-4 bg-red-500 p-2 rounded-xl" >Back</Link>
        </div>
    )
}