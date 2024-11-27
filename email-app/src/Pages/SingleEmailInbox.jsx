import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

import { emailContext } from "../Context/EmailContext";

const SingleEmailInbox = () => {
  const { emailData } = useContext(emailContext);
  const { emailId } = useParams();
  const email = emailData?.emails?.find(({ id }) => id === parseInt(emailId));

  if (!email) {
    return (
      <p className="text-center text-3xl bg-yellow-300 font-bold">
        Email Not Found
      </p>
    );
  }

  return (
    <div className="bg-emerald-200 text-center m-10 py-4  text-black font-semibold mx-auto">
      <h1 className="text-7xl my-5">{email.subject}</h1>
      <p className="text-2xl">Message : {email.message}</p>
      <p className="text-2xl">From : {email.sender}</p>
      <div className="my-8">
        <Link
          to="/inbox"
          className="bg-red-400 font-semibold text-3xl p-2 rounded-lg"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default SingleEmailInbox;
