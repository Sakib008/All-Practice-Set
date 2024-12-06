import {useContext} from 'react';

import {BookContext} from '../Context/BookContext';
import { BookItem } from '../Components/BookItem';

export const Read=()=>{
    const {state} = useContext(BookContext);
    const Read = state.readBooks
    return (
        <div className="flex flex-wrap items-start">
            {Read.map((book , index)=>(
                <BookItem {...book} readBook key={book.id} index={index} />
            ))}
        </div>
    )
}