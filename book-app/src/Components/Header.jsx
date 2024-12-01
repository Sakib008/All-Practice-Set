import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <div className='bg-sky-400 rounded-md mx-auto flex justify-center items-center '>
            <navbar className='text-center my-2 font-bold text-xl '>
                <NavLink to='/' className='px-2' >All Books</NavLink>
                <NavLink to='/favorites' className='px-2' >Favorites</NavLink>
                <NavLink to='/read'className='px-2' >Read</NavLink>
                <NavLink to='/profile' className='px-2' >Profile</NavLink>
            </navbar>
        </div>
    )
}