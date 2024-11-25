import { useContext, useEffect, useReducer } from "react";

import { emailContext } from "../Context/EmailContext";
const Inbox = () => {
  const { isLoading, handleEmail, emailData } = useContext(emailContext);

  const initialVal = { unread: 0, read: 0 };
  const countMail = (state, action) => {
    switch (action.type) {
      case "SET_COUNT":
        const unreadCount = action.payload?.filter(
          (email) => !email.read
        ).length;
        const readCount = action.payload?.filter((email) => email.read).length;
        return { ...state, unread: unreadCount, read: readCount };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(countMail, initialVal);
  useEffect(() => {
    handleEmail();
  }, []);

  useEffect(() => {
    {
      emailData?.emails &&
        dispatch({ type: "SET_COUNT", payload: emailData?.emails });
    }
  }, [emailData?.emails]);

  return (
    <div className="w-[50%] mx-auto ">
      <div className="text-center text-2xl bg-red-400">
        <p className="bg-yellow-400 px-8 rounded-sm inline-block py-1">
          {isLoading ? <span>...Loading</span> : <span>Inbox</span>}
        </p>
        <div className="flex justify-around w-[50%] py-2 mx-auto ">
          <p>Unread : {state.unread}</p>
          <p>Read : {state.read}</p>
        </div>
      </div>
      <div className="my-3 py-4 bg-sky-400">
        {emailData?.emails?.map((email) => (
          <div key={email.id} className="m-3">
            <h1 className="inline-block text-xl">{email.subject}</h1>
            {email.read && (
              <button className="mx-4 bg-purple-600 text-white text-xl p-1 rounded-md">
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
