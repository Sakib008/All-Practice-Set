import { createContext, useState } from "react";

import { fakeFetch } from "../Api/EmailApi";

export const emailContext = createContext();

export const EmailContextProvider = ({children}) => {
  const [emailData, setEmailData] = useState([]);
//   const [sendEmail, setSendEmail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = async () => {
    setIsLoading(true);
    try {
      const res = await fakeFetch("https://example.com/api/allemails");
      setEmailData(res.data);
    //   setSendEmail(res.data.sentEmails)
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };


  return(
    <emailContext.Provider value={{emailData,handleEmail,isLoading}} >
        {children}
    </emailContext.Provider>
  )
};