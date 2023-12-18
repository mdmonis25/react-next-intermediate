"use client";
import React, { useState } from "react";

const page = () => {
  const [username, setusername] = useState("")
  return (
    <>
      <h1>Enter your name: </h1>
      <form>
        <input
          type="text"
          className="text-xl border-2 border-zinc-600 px-4 py-2"
          value={username}
          onChange={(e)=>{
            setusername(e.target.valueco)
          }}
        />
      </form>
    </>
  );
};

export default page;
