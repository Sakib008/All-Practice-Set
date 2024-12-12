import { useContext } from "react";
import { useLocation,useNavigate } from 'react-router-dom';

import { BookContext } from "../Context/BookContext";

export function Login() {
  const location = useLocation();
  const navigate = useNavigate()
  const { isLogin, setIsLogin } = useContext(BookContext);
  const handleLogin = () => {
    setIsLogin(!isLogin)
  console.log(location)
  navigate(location?.state?.from?.pathname)
  }
    
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <p className='text-3xl text-blue-600 font-bold '>You have Not Login , Login by Click First</p>
      
      <button
        className="p-2 bg-sky-400 my-8 rounded-md"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
