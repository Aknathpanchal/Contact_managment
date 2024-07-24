"use client";

import React from "react";
import {
  HiOutlineMoon,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

interface HeaderProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setModalOpen }) => {
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-end">
      <div className="flex items-center items-right gap-2 mr-2">
        <HiOutlineMoon fontSize={40} />
        <MdOutlineDashboard fontSize={40} />
        <div
          style={{
            background: "#312b69",
            padding: "3%",
            borderRadius: "50%",
            color: "white",
          }}
        >
          <IoCallOutline fontSize={24} onClick={() => setModalOpen(true)} />
        </div>
        <HiOutlineUserCircle fontSize={40} />
      </div>
    </div>
  );
};

export default Header;
