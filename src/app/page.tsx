// import Image from 'next/image'

"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LinkBlock } from "@/components/LinkBlock";
import { getStartedLinks } from "@/constants/constants";
import React from "react";

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  }

  return (
    <main
      className="fonts xl:container-xl container mx-auto  flex min-h-screen flex-col items-center justify-between p-24 dark:dark-bg"
      data-darkmode={darkMode ? "dark" : "ligth"}
    >
      <Header setDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/dapplets.svg"
          alt="Dapplets Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {getStartedLinks.map((x, i) => (
          <LinkBlock key={i} content={x} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
