import { useEffect, useState } from "react";

import { fakeFetch } from "../Api/BookApi";
import { BookItem } from "../Components/BookItem";

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const handleBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch("https://latestbooks.com/api/books");
      setBooks(response.data.books);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto my-4 ">
      <div className="">
        <p className="text-center font-bold text-xl my-2">
          {isLoading ? "...Loading" : "All Books"}
        </p>
      </div>
      <div className="flex flex-wrap">
        {books?.map((book,index) => (
            <BookItem {...book} index={index} key={book.id}/>
        ))}
      </div>
    </div>
  );
}
