export function TodoCard({ todo,isDone }) {
  const { id, title, description, isCompleted } = todo;
  return (
    <div className="bg-purple-600 w-4/5 rounded-lg m-2 p-2 mx-auto text-white" key={id}>
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="">{description}</p>
      <p className=" ">Status : {isCompleted ? 'Done' : 'Not Done'}</p>
      {isDone &&
      (
        <button class="bg-rose-400 p-1 rounded-md my-2">Expend Todo</button>
      )}
    </div>
  );
}
