import {useContext} from 'react';
import { NavLink } from "react-router-dom";

import {BookContext} from '../Context/BookContext';

export function Header(){
    const {state} = useContext(BookContext);
    return(
        <div className='bg-sky-400 rounded-md mx-auto flex justify-center items-center '>
            <navbar className='text-center my-2 font-bold text-xl '>
                <NavLink to='/' className='px-2' >All Books</NavLink>
                <NavLink to='/favorite' className='px-2' >Favorites({state.favoriteBooks.length}) </NavLink>
                <NavLink to='/read'className='px-2' >Read({state.readBooks.length}) </NavLink>
                <NavLink to='/profile' className='px-2' >Profile</NavLink>
            </navbar>
        </div>
    )
}