import { useContext } from "react";

import { BookContext } from "../Context/BookContext";
import { Link } from "react-router-dom";

export const BookItem = (book) => {
  const { state, dispatch } = useContext(BookContext);
  const {
    id,
    title,
    author,
    publisher,
    year,
    image,
    price,
    read,
    index,
    favoriteBook,
    readBook,
  } = book;

  return (
    <div
      className="m-auto flex flex-col items-center my-4 w-60 border-4 border-sky-400 rounded-xl p-2"
      key={id}
    >
      <div className="w-32 h-48">
        <img alt={title} src={image} className="w-full h-full" />
      </div>
      <div className="my-4">
        <p>Book No : {index + 1}</p>
        <p>Title : {title}</p>
        <p>Price : $ {price}</p>

        <div className="my-4 flex flex-col items-start ">
          {!readBook && !favoriteBook && (
            <button
              onClick={() => dispatch({ type: "ADD_TO_READ", payload: book })}
              className="bg-sky-400 rounded-md text-lg px-2 mb-2"
            >
              {state.readBooks.find((reads) => reads.id === id) ? (
                <Link to="/read">Go to Read</Link>
              ) : (
                "Mark as read"
              )}
            </button>
          )}
          {!favoriteBook && !readBook && (
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_FAVORITE", payload: book })
              }
              className="bg-sky-400 rounded-md text-lg px-2"
            >
              {state.favoriteBooks.find((fav) => fav.id === id) ? (
                <Link to="/favorite">Go To Favorite</Link>
              ) : (
                "Add To Favorite"
              )}
            </button>
          )}
          {readBook && (
            <button
              className="bg-sky-400 rounded-md text-lg px-2"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_READ", payload: book })
              }
            >
              Remove It
            </button>
          )}
          {favoriteBook && (
            <button
              className="bg-sky-400 rounded-md text-lg px-2"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_FAVORITE", payload: book })
              }
            >
              Remove From Favorite
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
