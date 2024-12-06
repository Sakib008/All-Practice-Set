import { useContext } from "react";

import { BookContext } from "../Context/BookContext";

export function Profile() {
  const { profile } = useContext(BookContext);
  console.log(profile);
  return (
    <div className="flex flex-col items-center h-screen">
      <p className="text-4xl font-bold text-blue-600 py-3">Profile</p>
      <div className="w-96 ">
        <img
          src={profile.img}
          alt={profile.bio}
          className="w-full h-full py-4"
        />
      </div>
      <div className="text-2xl font-bold text-blue-600">
        <p>Name : {profile.name} </p>
        <p>Bio : {profile.bio} </p>
      </div>
    </div>
  );
}
