import React, { useState } from "react";
import red from "../assets/redCircle.png";
import yellow from "../assets/yellowCircle.png";
import green from "../assets/greenCircle.png";
import more from "../assets/more.png";
import small from "../assets/smallCircle.png";
import js from "../assets/icon-javscript.svg";
import node from "../assets/icon-nodejs.svg";
import express from "../assets/icon-express.svg";
import react from "../assets/icon-react.svg";
import tailwind from "../assets/icon-tailwindcss.svg";
import git from "../assets/icon-git.svg";
import github from "../assets/github.png";

const CardPage = () => {
  const [click, setClick] = useState(false);
  // =======================================================================
  return (
    <div>
      <div className="w-[1001px] max-sm:w-full mx-auto my-50 max-sm:my-20 shadow-2xl bg-[#121615]">
        <div className="border rounded-4xl">
          <header className=" bg-[#1B1F1E] shadow-2xl flex items-center w-full justify-between max-sm:justify-center max-sm:gap-2 p-8 max-sm:px-3 max-sm:py-5">
            <div className="flex items-center justify-start gap-4 max-sm:gap-2">
              <img src={red} alt="" className="max-sm:w-[20%]" />
              <img src={yellow} alt="" className="max-sm:w-[20%]" />
              <img src={green} alt="" className="max-sm:w-[20%]" />
            </div>
            {/* ========================== */}
            <h1 className="text-[38px] max-sm:text-[22px] max-sm:text-center font-normal text-white">
              fullStackDev.json()
            </h1>
            <button
              className="max-sm:hidden"
              onClick={() => {
                setClick(true);
              }}
            >
              <img src={more} alt="" />
            </button>
          </header>
          {/* ================================================= */}
          <div className="bg-[#171C1B] shadow-2xl w-full flex max-sm:items-center max-sm:justify-center justify-between p-8 max-sm:p-4">
            <div className="border border-white rounded-[99px] px-8 max-sm:px-5 py-4 max-sm:py-2 flex gap-2.5 w-[164px] max-sm:w-[140px]">
              <img src={small} alt="" className="max-sm:w-[25%]" />
              <a
                href="/public/amirResume.pdf"
                download
                className="text-white font-normal"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================================================== */}
        <pre className="text-start w-[783px] max-sm:w-full mx-auto py-2 max-sm:px-2">
          <code className="flex flex-col gap-1">
            <span className="text-[38px] max-sm:text-[25px] font-normal text-[#FFD602]">
              &#123;
            </span>

            <p className="text-[38px] max-sm:text-[25px] font-normal text-[#9CDCFE] pl-10 max-sm:pl-3">
              "About":{" "}
            </p>

            <div className="pl-15 max-sm:pl-6 flex flex-col gap-0.5 max-sm:gap-1">
              <span className="text-[38px] max-sm:text-[25px] font-normal text-[#DA70D6]">
                &#123;
              </span>

              <p className="text-[38px] max-sm:text-[25px] font-normal text-[#9CDCFE]">
                "name":{" "}
                <span className="text-[#D7957D]">"Amir A. (Jaysh)",</span>
              </p>
              {/* =========================== */}
              <div className="text-[38px] max-sm:text-[25px] font-normal text-[#9CDCFE] flex">
                "skills":{" "}
                <div className="flex items-center gap-2 max-sm:gap-0.5">
                  [
                  <img
                    className="w-[10%] max-sm:w-[7%]"
                    src={tailwind}
                    alt=""
                  />
                  ,
                  <img className="w-[10%] max-sm:w-[7%]" src={js} alt="" />,
                  <img className="w-[10%] max-sm:w-[7%]" src={react} alt="" />,
                  <img className="w-[10%] max-sm:w-[7%]" src={git} alt="" />,
                  <img className="w-[10%] max-sm:w-[7%]" src={node} alt="" />,
                  <img className="w-[9%] max-sm:w-[7%]" src={express} alt="" />]
                  <span className="text-[#D7957D]">,</span>
                </div>
              </div>
              {/* ========================================== */}

              <div className="text-[38px] max-sm:text-[25px] font-normal text-[#9CDCFE] flex items-center">
                "github":{" "}
                <a href="https://github.com/amir243-dev" target="blank">
                  <img className="w-[70%]" src={github} alt="" />
                </a>
                <a href="https://github.com/amir243-dev" target="blank">
                  <span className="text-[#D7957D] underline">
                    "amir243-dev"
                  </span>
                </a>
                ,
              </div>

              <span className="text-[38px] max-sm:text-[25px] font-normal text-[#DA70D6]">
                &#125;
              </span>
            </div>

            <span className="text-[38px] max-sm:text-[25px] font-normal text-[#FFD602]">
              &#125;
            </span>
          </code>
          {/* ========================= */}
        </pre>
      </div>
    </div>
  );
};

export default CardPage;
