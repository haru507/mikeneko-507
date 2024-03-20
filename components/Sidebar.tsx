/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

function Sidebar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/mike.png"
        alt="user avatar"
        className="mx-auto rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        石井
        <span className="text-green"> 治樹</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web エンジニア
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500"
        href="https://www.wantedly.com/id/haruki_ishii_mike"
      >
        <GiFireworkRocket className="w-6 h-6" />
        <p style={{ marginLeft: "5px" }}>Wantedly</p>
      </a>

      {/* Social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://twitter.com/mikeneko_nyaan2">
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/haru507">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://zenn.dev/haru507">
          <FaStickyNote className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Tokyo, Japan</span>
        </div>
        <p className="my-2">i.haruki507@gmail.com</p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:i.haruki507@gmail.com")}
      >
        Eメールを送る
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={changeTheme}
      >
        {theme === "light" ? "ダークモード" : "ライトモード"}
      </button>
    </>
  );
}

export default Sidebar;