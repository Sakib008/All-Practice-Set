import { createContext,useReducer } from "react";

const BookContext = createContext();

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
      case "REMOVE_FROM_READ":
        if (state.favoriteBooks.filter((book) => book.id !== action.payload.id))
          return {
            ...state,
            favoriteBooks: [...state.favoriteBooks, action.payload],
          };
        return state;

      case "REMOVE_FROM_FAVORITE":
        if (state.readBooks.filter((book) => book.id !== action.payload.id))
          return { ...state, readBooks: [...state.readBooks, action.payload] };
        return state;

      default:
        return state;
    }
  };

  const [state,dispatch] =useReducer(bookReducer,initialVal);

  return (
    <BookContext.Provider value={{ state,dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
