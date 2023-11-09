"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import logo from "@/assets/icon/header/logo-dark.svg";
import moon from '@/assets/icon/header/moon_dark.svg'
import Image from "next/image";
export interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode:any
}
export function Header({ isDarkMode,toggleDarkMode }: HeaderProps) {
  
  return (
    <div className='fonts container-xl mx-auto flex'>
      <Link href="/">
        <Image width={178} height={50} alt="logo" src={logo} />
      </Link>
      <Link href="/">
        <div>Home</div>
      </Link>
      <Link href="/about">
        <div>About</div>
      </Link>
      <div>Documentation</div>
      <div>Search</div>
      <div onClick={toggleDarkMode}> <Image width={34} height={34} alt="moon" src={moon} /></div>
    </div>
  );
}
