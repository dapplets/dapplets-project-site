"use client";
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
      <div>Logo</div>
      <div>Home</div>
      <div>About</div>
      <div>Documentation</div>
      <div>Search</div>
      <div onClick={toggleDarkMode}>DarkMode</div>
    </div>
  );
}
