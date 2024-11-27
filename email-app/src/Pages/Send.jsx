import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { emailContext } from "../Context/EmailContext";

const Send = () => {
  const { handleEmail, isLoading, emailData } = useContext(emailContext);

  useEffect(() => {
    if (emailData?.sentEmails.length === 0) {
      handleEmail();
    }
  }, []);

  return (
    <div className="w-[50%] mx-auto ">
      <div className="text-center text-2xl bg-green-400">
        <p className="bg-yellow-400 px-8 rounded-sm inline-block py-1">
          {isLoading ? <span>...Loading</span> : <span>Send</span>}
        </p>
      </div>
      <div className="my-3 py-4 bg-sky-400">
        {emailData?.sentEmails?.map((email) => (
          <div key={email.id} className="m-3">
            <Link
              to={`/send/${email.id}`}
              className="inline-block text-xl underline underline-offset-4"
            >
              {email.subject}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Send;