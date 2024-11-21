import {Link} from 'react-router-dom';
export function Home(){

    return(
        <div className="flex items-center justify-center p-8 h-full flex-col">
             <h1 className='text-8xl font-bold mb-8'>Welcome John</h1>
             <Link to='/question' className=' text-4xl rounded-lg font-semibold bg-pink-400 p-2'>Question List</Link>
        </div>
    )
}