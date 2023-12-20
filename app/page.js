"use client";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
const notify = ()=>{
  toast.warn('Got It', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
  return (
    <>
      <button className="bg-red-900 text-white px-4 py-2 text-xl" onClick={notify}>Get Now</button>
    <ToastContainer/>
    </>
  );
};

export default page;
