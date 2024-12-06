import { createContext, useReducer,useState } from "react";

import {fakeFetch} from '../Api/BookApi';

export const BookContext = createContext();


export const BookContextProvider = ({ children }) => {
  const initialVal = { readBooks: [], favoriteBooks: [] };

  const bookReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_FAVORITE":
        if (!state.favoriteBooks.find((book) => book.id === action.payload.id))
          return {
            ...state,
            favoriteBooks: [...state.favoriteBooks, action.payload],
          };
        return state;
      case "ADD_TO_READ":
        if (!state.readBooks.find((book) => book.id === action.payload.id))
          return { ...state, readBooks: [...state.readBooks, action.payload] };
        return state;
      case "REMOVE_FROM_FAVORITE":
        return {
          ...state,
          favoriteBooks: state.favoriteBooks.filter(
            (book) => book.id !== action.payload.id
          ),
        };

      case "REMOVE_FROM_READ":
        return {
          ...state,
          readBooks: state.readBooks.filter(
            (book) => book.id !== action.payload.id
          ),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(bookReducer, initialVal);


  // Fetching Data 

  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [profile,setProfile] = useState({});


  const handleBooks = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch("https://latestbooks.com/api/books");
      setBooks(response.data.books);
      setProfile(response.data.user)
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return (
    <BookContext.Provider value={{ state, dispatch,profile,isLoading,books,handleBooks }}>
      {children}
    </BookContext.Provider>
  );
};
