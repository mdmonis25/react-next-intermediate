"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [user, setuser] = useState([]);
  const getusers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setuser(data);
  };
  useEffect(() => {
    getusers();
  
  }, [])
  
  return (
    <>
      {/* <h1>Enter your name: </h1> */}
      {/* <form>
        <input
          type="text"
          className="text-xl border-2 border-zinc-600 px-4 py-2"
          value={username}
          onChange={(e)=>{
            setusername(e.target.value)
          }}
        />
      </form> */}
      <button onClick={getusers} className="bg-green-500 text-xl text-white font-bold p-2 rounded">
        Get Now
      </button>
      <div className="p-4 mt-5 w-full bg-slate-200 flex ">
      <ul>
      {user.map((e)=>{
        return <li>{e.name} --- <a href={`/${e.id}`}>Explore</a></li>
      })}
      </ul>
      </div>
    </>
  );
};

export default page;
