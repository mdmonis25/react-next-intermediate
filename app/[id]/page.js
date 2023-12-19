"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({params}) => {
    const {id} = params;

    const [user, setuser] = useState([]);
    const getusers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    setuser(data);
  };
  useEffect(() => {
    getusers();
  
  }, [])
  
  return (
    <div>{ JSON.stringify(user)}</div>
  )
}

export default page