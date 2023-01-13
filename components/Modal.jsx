"use client"
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Modal({ setOpenModal }) {

  const { logout } = useContext(AuthContext);

  return (
    <div className="fixed inset-0 bg-white text-slate-900 text-lg sm:text-xl flex flex-col">
      <div className="flex items-center justify-between border-b border-solid border-slate-900 p-4">
        <h1 className="font-extrabold text-2xl sm:text-5xl select-none">
          MENU
        </h1>
        <i
          onClick={() => setOpenModal(false)}
          className="fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer"
        ></i>
      </div>
      <div className="p-4 flex justify-end">
        <h2
          onClick={() => {
            logout();
            setOpenModal(false);
          }}
          className="select-none  duration-300 hover:p-2 cursor-pointer bg-red-500"  
        >
          Logout
        </h2>
      </div>
    </div>
  )
}
