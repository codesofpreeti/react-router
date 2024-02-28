import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Careers() {
  const users = useLoaderData();
  return (
    <div>
      {users.map((user) => (
        <Link to={user.id.toString()} key={user.id}>
          <div className="shadow-lg p-4 border m-12 flex justify-between hover:text-green-400 hover:scale-110">
            <p >{user.name}</p>
            <p>username: {user.username}</p>
            <br />
          </div>
        </Link>
      ))}
    </div>
  );
}

export const careersLoaders = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};
