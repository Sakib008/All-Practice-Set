import { useEffect,useContext } from "react";

import {BookContext} from '../Context/BookContext';
import { BookItem } from "../Components/BookItem";



export function Home() {
  
  const {books,handleBooks,isLoading} = useContext(BookContext);

  useEffect(() => {
    if (books.length === 0) {
      handleBooks();
    }
  }, [books,handleBooks]);

  return (
    <div className="max-w-screen-2xl m-auto my-4 ">
      <div className="">
        <p className="text-center font-bold text-xl my-2">
          {isLoading ? "...Loading" : "All Books"}
        </p>
      </div>
      <div className="flex flex-wrap">
        {books?.map((book, index) => (
          <BookItem {...book} index={index} key={book.id} />
        ))}
      </div>
    </div>
  );
}
