import { useReducer } from "react";

const numList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

function oddAndEvenSumReducer(acc, value) {
  switch (value.type) {
    case "even":
      return { ...acc, even: acc.even + value.payload };
    case "odd":
      return { ...acc, odd: acc.odd + value.payload };
    default:
      return acc;
  }
}

const initialAccumulator = { odd: 0, even: 0 };
const resultNumList = numList.reduce(oddAndEvenSumReducer, initialAccumulator);

function counterReducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case 'Reset' : 
    return {count : 0}
    default:
      return state;
  }
}

export function Reducer1() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div class="">
      <h1 class="text-2xl">Ques :- 1st 's Solution</h1>
      <h1 class="text-4xl">Total odd : {resultNumList.odd}</h1>
      <h1 class="text-4xl">Total Even : {resultNumList.even}</h1>
      <br />
      <br />
      <h1 class="text-2xl">Solution :- 2nd </h1>
      <h1 class="text-4xl">Using use Reducer | Count : {state.count} </h1>
      <button
        class="text-gray-50 font-bold text-center mr-4 mt-4  h-8 w-8 text-2xl rounded-md bg-blue-400"
        onClick={() => dispatch({ type: "Increment" })}
      >
      +
      </button>
      <button
        class=" text-gray-50 font-bold text-center mr-4 mt-4 h-8 w-8 text-2xl rounded-md bg-red-400"
        onClick={() => dispatch({ type: "Decrement" })}
      >
      -
      </button>
      <button
        class=" text-gray-50 font-bold text-center mr-4 mt-4 h-8 w-20 text-2xl rounded-md bg-indigo-700"
        onClick={() => dispatch({ type: "Reset" })}
      >
      Reset
      </button>
    </div>
  );
}
