"use client";
import Link from "next/link";
import styles from "./Home.module.scss";
import { HomeTitle, getStartedLinks } from "@/constants/constantsText";
import { LinkBlock } from "@/app/components/LinkBlock";
export interface HomeProps {
  isDarkMode: boolean;
}
export function Home({ isDarkMode }: HomeProps) {
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  }
  return (
    <div className={styles.wrapper}>
      <div>
        <div>{HomeTitle.title}</div>
        <div>
        {HomeTitle.subtitle}
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {getStartedLinks.map((x, i) => (
            <LinkBlock key={i} content={x} />
          ))}
        </div>
      </div>
    </div>
  );
}
