import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I´m <span className="text-[#4db1dc]">Juan</span>,
          </h1>
          <h1 className="py-4 text-gray-700">A Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I´m a dedicated and passionate fullstack developer with Knowledge in
            React, Express and React Native
          </p>
          
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 mt-2">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 ml-2 cursor-pointer hover:scale-105 ease-in duration-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 ml-2 cursor-pointer hover:scale-105 ease-in duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 ml-2 cursor-pointer hover:scale-105 ease-in duration-500">
              <BsFillPersonLinesFill />
            </div>
          </div>
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-1">
            LET´S BUILD SOMETHING TOGETHER
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
