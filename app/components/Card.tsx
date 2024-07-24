import React from "react";
import { IoCall } from "react-icons/io5";
import { FcVideoCall } from "react-icons/fc";
import { MdMessage } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

interface CardProps {
  name: string;
  number: string;
  personal:boolean
  status: "online" | "offline";
}

const Card: React.FC<CardProps> = ({ name, number, personal, status}) => {
  return (
    <div className="shadow-sm border w-64">
      <div className="place-items-start bg-white ">
        <div className="hero-content justify-start flex-col lg:flex-row">
          <div className={`avatar ${status}`}>
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={`${name}'s avatar`} />
            </div>
          </div>
          <div>
            <h6 className="text-sm font-bold">{name}</h6>
            <p className="py-2 text-xs">{number}</p>
          </div>
        </div>
        <div className="px-4 pb-4 items-center flex gap-8">
          <IoCall color="green" fontSize={20}/>
          <FcVideoCall  fontSize={20}/>
          <MdMessage fontSize={20}/>
          {personal?(<FaRegStar color="yellow" fontSize={20} />):(<FaStar color="yello" fontSize={20} />)}
          <HiDotsVertical fontSize={20} />
        </div>
      </div>
    </div>
  );
}

export default Card;
