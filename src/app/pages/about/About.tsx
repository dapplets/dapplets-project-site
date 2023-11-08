"use client";
import Link from "next/link";
import styles from "./About.module.scss";
export interface AboutProps {
  isDarkMode: boolean;
}
export function About({ isDarkMode }: AboutProps) {
  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  }
  return (
    <div className={styles.wrapper}>
      <Link href="/">  <div>Logo</div></Link>
      <div>Logo</div>
      <Link href="/about">  <div>About</div></Link>
   
      <Link href="/">  <div>Home</div></Link>
      <div>Documentation</div>
      <div>Search</div>
      <div onClick={toggleDarkMode}>DarkMode</div>
    </div>
  );
}