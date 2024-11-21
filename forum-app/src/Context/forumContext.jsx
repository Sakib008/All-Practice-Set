import { createContext, useState } from "react";

import { fakeFetch } from "../Api/forumApi";

export const ForumContext = createContext();

export function ForumProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState({});

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const response = await fakeFetch("https://example.com/api/questions");
      console.log(response);
      setQuestions(response.data.questions);
      console.log(setQuestions(response.data.questions));
      console.log(questions);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const handleAnswer = (ques) =>setAnswer(ques);

  return (
    <ForumContext.Provider
      value={{ isLoading, questions, fetchQuestions, handleAnswer,answer }}
    >
      {children}
    </ForumContext.Provider>
  );
}
