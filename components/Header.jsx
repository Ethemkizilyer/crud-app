"use client"
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { FaUserAlt } from 'react-icons/fa';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
console.log(openModal);
  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
        <h1 className="text-3xl select-none sm:text-6xl">TODO LIST</h1>
        <FaUserAlt
          onClick={() => setOpenModal(!openModal)}
          className="text-4xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"
        />
        
      </div>
    </>
  );
}
