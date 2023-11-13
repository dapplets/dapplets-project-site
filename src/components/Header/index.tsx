'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import logo from '@/assets/icon/header/logo-dark.svg';
import logoLight from '@/assets/icon/header/logo.svg';
import moon from '@/assets/icon/header/moon_dark.svg';
import sun from '@/assets/icon/header/sun.svg';
import Image from 'next/image';
import { Search } from '../Search';
import { useEffect, useState } from 'react';
export interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: any;
  isMatches: boolean;
}
export function Header({ isDarkMode, toggleDarkMode, isMatches }: HeaderProps) {
  return (
    <div className='fonts container-xl mx-auto flex items-center justify-between py-15'>
      <Link className={cn(styles.linkHover, 'text-base')} href='/'>
        <Image
          width={178}
          height={50}
          alt='logo'
          src={
            isMatches && isDarkMode
              ? logo
              : !isMatches && isDarkMode
                ? logo
                : logoLight
          }
        />
      </Link>
      <div className={cn(styles.linkBlock, 'flex justify-between')}>
        <Link href='/'>
          <div className={cn(styles.linkHover, 'text-base')}>Home</div>
        </Link>
        {/* <Link href="/about"> */}
        <div className={cn(styles.linkHover, 'text-base')}>About</div>
        {/* </Link> */}
        <Link target='_blank' href='https://docs.dapplets.org/docs/'>
          <div className={cn(styles.linkHover, 'text-base')}>Documentation</div>
        </Link>
      </div>

      <Search
        isLight={
          isMatches && isDarkMode
            ? false
            : !isMatches && isDarkMode
              ? false
              : true
        }
      />
      <div className={cn(styles.mode)} onClick={toggleDarkMode}>
        {' '}
        <Image
          width={34}
          height={34}
          alt='darkMode'
          src={
            isMatches && isDarkMode
              ? sun
              : !isMatches && isDarkMode
                ? sun
                : moon
          }
        />
      </div>
    </div>
  );
}
