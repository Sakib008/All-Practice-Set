import { NavLink } from "react-router-dom";

export function TodoHeader() {
  return (
    <div className="flex ">
      <nav className="text-lg my-7 text-center w-full">
        <NavLink
          to="/todo/done"
          className={({ isActive }) =>
            isActive ? "bg-slate-500 mx-3 font-bold p-2 text-gray-100" : "bg-red-400 mx-3 font-bold p-2 rounded text-white"
          }
        >
          Done
        </NavLink>
        <NavLink
          to="/todo/open"
          className={({ isActive }) =>
            isActive ? "bg-slate-500 mx-3 font-bold p-2 text-gray-100" : "bg-red-400 mx-3 font-bold p-2 rounded text-white"
          }
        >
          Open
        </NavLink>
       
      </nav>
    </div>
  );
}
