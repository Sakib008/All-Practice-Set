import { useContext, useEffect } from "react";

import { ForumContext } from "../Context/forumContext";
import { QuestionCard } from "../Components/questionCard";
import { Link } from "react-router-dom";
export function Question() {
  const { questions, fetchQuestions, isLoading } = useContext(ForumContext);
  useEffect(() => {
    if (!questions.lenght) {
      fetchQuestions();
    }
  }, []);
  console.log(questions);

  return (
    <div className="relative">
      <Link
        to="/"
        className="absolute top-3 left-3 mb-3 p-2 font-bold bg-yellow-300 m-3 rounded-xl inline-block text-red-700 text-3xl"
      >
        Back
      </Link>
      {isLoading ? (
        <p className="p-2 font-bold bg-yellow-300 m-3 rounded-xl inline-block text-red-700 text-3xl">
          Loading.....
        </p>
      ) : (
        <p className="p-2 font-bold bg-yellow-300 m-3 rounded-xl inline-block text-red-700 text-3xl">
          Question List
        </p>
      )}
      <div className="p-8 w-full mx-auto text-left ">
        {questions.map((ques,index) => (
          <QuestionCard {...ques} index={index} key={ques.id} />
        ))}
      </div>
    </div>
  );
}
