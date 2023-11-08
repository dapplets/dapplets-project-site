"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
export interface HeaderProps {
  isDarkMode: boolean;
}
export function Header({ isDarkMode }: HeaderProps) {
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
