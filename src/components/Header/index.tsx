import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import logo from '@/assets/icon/header/logo-dark.svg';
import logoLight from '@/assets/icon/header/logo.svg';
import moon from '@/assets/icon/header/moon_dark.svg';
import sun from '@/assets/icon/header/sun.svg';
import { Search } from '../Search';
import { useTheme } from 'next-themes';
import { ThemeImage } from '../ThemeImage';

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleDarkMode() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='fonts container-xl mx-auto flex items-center justify-between py-15'>
      <Link className={cn(styles.linkHover, 'text-base')} href='/'>
        <ThemeImage
          width={178}
          height={50}
          alt='logo'
          srcDark={logo}
          srcLight={logoLight}
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

      <Search />

      <div className={cn(styles.mode)} onClick={toggleDarkMode}>
        {' '}
        <ThemeImage
          width={34}
          height={34}
          alt='darkMode'
          srcDark={sun}
          srcLight={moon}
        />
      </div>
    </div>
  );
}
