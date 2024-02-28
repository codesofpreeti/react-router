import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const user = useLoaderData();
  return <div className="flex flex-col items-center">
    <h2 className="font-bold">Details for: {user.name}</h2>
    <p>Email id: {user.email}</p>
    <p>Phone no: {user.phone}</p>
  </div>;
}

export const careerDeetsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  if(!res.ok){
    throw Error('Could not find the user!')
  }
  return res.json();
};
