import {useContext} from 'react';

import {BookContext} from '../Context/BookContext';
import { BookItem } from '../Components/BookItem';

export const Favorite=()=>{
    const {state} = useContext(BookContext);
    const favorite = state.favoriteBooks
    return (
        <div className="flex flex-wrap items-start">
            {favorite.map((book , index)=>(
                <BookItem {...book} favoriteBook key={book.id} index={index} />
            ))}
        </div>
    )
}