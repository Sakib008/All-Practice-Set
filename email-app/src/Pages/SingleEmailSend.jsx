import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { emailContext } from "../Context/EmailContext";

const SingleEmailSend = () => {
  const { emailData } = useContext(emailContext);
  const { sendId } = useParams();

  const send = emailData?.sentEmails?.find(({ id }) => id === parseInt(sendId));

  if (!send) {
    return (
      <p className="text-center text-3xl bg-yellow-300 font-bold">
        Email Not Found
      </p>
    );
  }

  return (
    <div className="bg-emerald-200 text-center m-10 py-4  text-black font-semibold mx-auto">
      <h1 className="text-7xl my-5">{send.subject}</h1>
      <p className="text-2xl">Message : {send.message}</p>
      <p className="text-2xl">To : {send.to}</p>
      <div className="my-8">
        <Link
          to="/send"
          className="bg-red-400 font-semibold text-3xl p-2 rounded-lg"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default SingleEmailSend;
