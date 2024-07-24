"use client";

import React, { ReactNode, useState } from "react";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { HiOutlineSearch } from "react-icons/hi";
import Card from "../components/Card";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { IoVideocamOutline, IoCall } from "react-icons/io5";
import { ImPhoneHangUp } from "react-icons/im";
import { FaPause } from "react-icons/fa";
import { BsMicMuteFill } from "react-icons/bs";
import { IoMdAdd, IoIosPeople } from "react-icons/io";
import { BiTransferAlt } from "react-icons/bi";
import { FaRepeat } from "react-icons/fa6";
import { MdRecordVoiceOver } from "react-icons/md";
import { IoKeypad } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";

interface Contact {
  id: number;
  name: string;
  number: string;
  personal: boolean;
  status: "online" | "offline";
}

interface callData {
  number: string;
  name: string;
}

interface DialPadItem {
  icon: ReactNode;
  id: number;
  name: string;
}

const Data: Contact[] = [
  {
    id: 1,
    name: "John Doe",
    number: "+1234567890",
    personal: true,
    status: "online",
  },
  {
    id: 2,
    name: "Jane Smith",
    number: "+0987654321",
    personal: false,
    status: "offline",
  },
  {
    id: 3,
    name: "Alice Johnson",
    number: "+1122334455",
    personal: true,
    status: "online",
  },
  {
    id: 4,
    name: "Bob Brown",
    number: "+1223344556",
    personal: false,
    status: "offline",
  },
  {
    id: 5,
    name: "Charlie Davis",
    number: "+1334455667",
    personal: true,
    status: "online",
  },
  {
    id: 6,
    name: "Diana Evans",
    number: "+1445566778",
    personal: false,
    status: "offline",
  },
  {
    id: 7,
    name: "Ethan Foster",
    number: "+1556677889",
    personal: true,
    status: "online",
  },
  {
    id: 8,
    name: "Fiona Green",
    number: "+1667788990",
    personal: false,
    status: "offline",
  },
  {
    id: 9,
    name: "George Harris",
    number: "+1778899001",
    personal: true,
    status: "online",
  },
  {
    id: 10,
    name: "Hannah Irving",
    number: "+1889900112",
    personal: false,
    status: "offline",
  },
];

const dialPadItems: DialPadItem[] = [
  { icon: <FaPause fontSize={20} />, id: 1, name: "Pause" },
  { icon: <BsMicMuteFill fontSize={20} />, id: 2, name: "Mute" },
  { icon: <IoMdAdd fontSize={20} />, id: 3, name: "Add Call" },
  { icon: <IoIosPeople fontSize={20} />, id: 4, name: "Conforence" },
  { icon: <BiTransferAlt fontSize={20} />, id: 5, name: "Transfer" },
  { icon: <FaRepeat fontSize={20} />, id: 6, name: "Alt.Transfer" },
  { icon: <MdRecordVoiceOver fontSize={20}/>, id: 7, name: "Record" },
  { icon: <IoKeypad fontSize={20}/>, id: 8, name: "Keypad" },
  { icon: <FaVideo fontSize={20} />, id: 9, name: "Video" },
  { icon: null, id: 10, name: "" },
  { icon: null, id: 11, name: "" },
  { icon: null, id: 12, name: "" },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPersonal, setShowPersonal] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [dialedNumber, setDialedNumber] = useState("");
  const [callNumber, setCallNumber] = useState(true);
  const [callData, setCallData] = useState<callData | null>(null);

  const handleButtonClick = (value: string) => {
    setDialedNumber((prev) => prev + value);
  };

  const handleCall = () => {
    const contact = Data.find((contact) => contact.number === dialedNumber);
    const contactName = contact ? contact.name : "Unknown";

    const newCallData: {
      number: string;
      name: string;
    } = {
      number: dialedNumber,
      name: contactName,
    };

    setCallData(newCallData);
    console.log("Call Data:", newCallData);
    setCallNumber(false);
  };

  const handleEnd = () => {
    setCallData(null);
    setDialedNumber("");
    setCallNumber(true);
    setModalOpen(false)
  };

  const handleDelete = () => {
    setDialedNumber((prev) => prev.slice(0, -1));
  };

  const handleContactClick = (number: string) => {
    setDialedNumber(number);
  };

  const filteredContacts = Data.filter((contact) => {
    return contact.number.includes(dialedNumber);
  });

  const filteredData = Data.filter((contact) => {
    const matchesSearch = contact.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPersonal = !showPersonal || (showPersonal && contact.personal);
    return matchesSearch && matchesPersonal;
  });

  return (
    <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header setModalOpen={setModalOpen} />
        <div className="p-4 bg-white">
          <p className="font-bold text-xl">Team</p>
        </div>
        <div className="p-4 m-4 bg-white flex flex-col lg:flex-row lg:justify-between lg:items-center md:flex-row md:justify-between md:items-center">
          <div className="relative mb-4 lg:mb-0">
            <HiOutlineSearch
              fontSize={20}
              className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm focus:outline-none active:outline-none border border-gray-300 w-full lg:w-[24rem] h-10 pl-11 pr-4 rounded-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center md:flex-row md:items-center">
            <div className="form-control lg:mb-0 lg:mr-4">
              <label className="label gap-2 cursor-pointer">
                <span className="label-text">Personal</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={showPersonal}
                  onChange={() => setShowPersonal(!showPersonal)}
                />
              </label>
            </div>
            <select
              className="border h-10 w-full lg:w-auto rounded-lg"
              name=""
              id=""
            >
              <option value="">All Groups</option>
            </select>
          </div>
        </div>
        <div className="mx-4 flex flex-wrap gap-2">
          {filteredData.map((contact) => (
            <Card
              key={contact.id}
              name={contact.name}
              number={contact.number}
              personal={contact.personal}
              status={contact.status}
            />
          ))}
        </div>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          {callNumber ? (
            <div className="flex flex-col p-4 w-80">
              <div className="w-full mb-4">
                <input
                  type="text"
                  className="w-full h-12 text-2xl text-blue-50 text-center bg-[#312b69] border-none focus:outline-none focus:ring-0"
                  value={dialedNumber}
                  readOnly
                />
              </div>
              <div className="w-full h-32">
                {filteredContacts.length > 0 && (
                  <div className="w-full overflow-y-auto h-24 mb-4">
                    <ul>
                      {filteredContacts.map((contact) => (
                        <div
                          className="shadow-sm w-full cursor-pointer"
                          key={contact.id}
                          onClick={() => handleContactClick(contact.number)}
                        >
                          <div className="place-items-start bg-[#312b69]">
                            <div className="hero-content p-1 justify-start flex-row">
                              <div className={`avatar ${contact.status}`}>
                                <div className="w-12 rounded-full">
                                  <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt={`${contact.name}'s avatar`}
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className="text-sm text-blue-100 font-bold">
                                  {contact.name}
                                </h6>
                                <p className="py-2 text-white text-xs">
                                  {contact.number}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex justify-center items-end">
                <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                  {[
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "*",
                    "0",
                    "#",
                  ].map((value) => (
                    <button
                      className="w-14 m-auto h-14 text-lg text-white font-semibold rounded-[50px] bg-[#4d467d] hover:bg-gray-400"
                      onClick={() => handleButtonClick(value)}
                      key={value}
                    >
                      {value}
                    </button>
                  ))}
                  <div className="flex items-center justify-center text-white">
                    <IoVideocamOutline fontSize={24} />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="w-14 h-14 bg-green-500 flex justify-center items-center text-white text-2xl font-bold rounded-[50px]"
                      onClick={handleCall}
                    >
                      <IoCall fontSize={24} />
                    </button>
                  </div>

                  <div className="flex items-center justify-center">
                    <RiDeleteBack2Fill
                      color="#4d467d"
                      fontSize={24}
                      onClick={handleDelete}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center p-4 w-80">
              <div className="w-full gap-2 flex justify-center flex-col my-4">
               <h1 className="text-blue-100 text-center font-bold text-2xl">{callData?.name}</h1>
               <p className="text-blue-50 text-center text-sm ">{callData?.number}</p>
               <p className="text-blue-50 text-center text-xs ">Calling...</p>
              </div>
            

              <div className="flex justify-center items-end">
                <div className="grid grid-cols-3 gap-x-6 gap-y-2">
                  {dialPadItems.map((value) => (
                    <div
                      className="w-14 m-auto flex flex-col justify-center items-center h-14 text-lg text-white"
                      key={value.id}
                    >
                      <>
                        <div>{value.icon}</div>
                        <p className="text-[6px] text-blue-50">{value.name}</p>
                      </>
                    </div>
                  ))}
                  <div className="flex items-center justify-center text-white">
                    <IoVideocamOutline fontSize={24} />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="w-14 h-14 bg-red-500 flex justify-center items-center text-white text-2xl font-bold rounded-[50px]"
                      onClick={handleEnd}
                    >
                      <ImPhoneHangUp fontSize={24} />
                    </button>
                  </div>

                  <div className="flex items-center justify-center">
                    <RiDeleteBack2Fill
                      color="#4d467d"
                      fontSize={24}
                      onClick={handleDelete}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}
