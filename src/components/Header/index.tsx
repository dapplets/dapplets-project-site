"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import cn from 'classnames'
import logo from "@/assets/icon/header/logo-dark.svg";
import moon from '@/assets/icon/header/moon_dark.svg'
import Image from "next/image";
import { Search } from "../Search";
export interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode:any
}
export function Header({ isDarkMode,toggleDarkMode }: HeaderProps) {
  
  return (
    <div className='py-15 items-center fonts container-xl mx-auto flex justify-between'>
      <Link className={cn(styles.linkHover,'text-base')} href="/">
        <Image width={178} height={50} alt="logo" src={logo} />
      </Link>
      <div className={cn(styles.linkBlock,'flex justify-between')}>
      <Link href="/">
        <div className={cn(styles.linkHover,'text-base')}>Home</div>
      </Link>
      <Link href="/about">
        <div className={cn(styles.linkHover,'text-base')}>About</div>
      </Link>
      <Link target="_blank" href="https://docs.dapplets.org/docs/">
      <div className={cn(styles.linkHover,'text-base')}>Documentation</div>
      </Link>
     
      </div>
    
     <Search/>
      <div className={cn(styles.mode)} onClick={toggleDarkMode}> <Image width={34} height={34} alt="moon" src={moon} /></div>
    </div>
  );
}
