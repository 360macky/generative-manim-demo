import React from "react";
import Logo from "./logo.png";
import Image from "next/image";
import Switcher from "./Main";

const Homepage = () => {
  return (
    <div className="text-center flex flex-col gap-y-4 px-6 lg:px-24">
      <Image
        src={Logo}
        alt="Logo"
        className="w-24 lg:w-32 h-24 lg:h-32 mx-auto mt-12"
      />
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
          Generative Manim
        </h1>
        <p className="text-xl lg:text-2xl text-rose-400 dark:text-rose-200">
          🎬 GPT for video generation 🏗️
        </p>
      </div>
      <main className="max-w-screen-lg sm:w-screen">
        {/* <Switcher /> */}
      </main>
      
    </div>
  );
};

export default Homepage;
