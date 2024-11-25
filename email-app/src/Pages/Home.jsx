import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-sky-400 w-[calc(100%-32px)] rounded-xl mx-auto h-[calc(100%-32px)]">
      <div className="h-[96vh] flex flex-col justify-center items-center m-4">
        <h1 className="text-8xl mb-6">My Mail Box</h1>
        <div className="">
          <Link to="/inbox" className='bg-pink-500 p-2 rounded-md font-semibold m-2 text-2xl'>Inbox</Link>
          <Link to="/send" className='bg-yellow-500 p-2 rounded-md m-2 text-2xl'>Send</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
