"use client";
import styles from "./Header.module.scss";
export interface HeaderProps
 {
    setDarkMode: any
    isDarkMode: boolean
 
}
export  function  Header({ setDarkMode, isDarkMode }: HeaderProps) {
  return (
    <div className={styles.wrapper}>
      <div>Logo</div>
      <div>Home</div>
      <div>About</div>
      <div>Documentation</div>
      <div>Search</div>
      <div onClick={setDarkMode}>DarkMode</div>
    </div>
  );
}
