import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { ThemeImage } from '../ThemeImage';

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleDarkMode() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={cn(styles.wrapper,'fonts container-xl  mx-auto flex items-center justify-between py-15')}>
      <Link
        className={cn(styles.linkHover, ' text-base')}
        href='/'
      >
        <ThemeImage
          width={178}
          height={50}
          alt='logo'
          src='icons/header/logo.svg'
          className=''
        />
      </Link>
      <div
        className={cn(
          styles.linkBlock,
          'grow-1  flex justify-between '
        )}
      >
        <Link href='/'>
          <div className={cn(styles.linkHover, 'text-base ')}>Home</div>
        </Link>
        {/* <Link href="/about"> */}
        <div className={cn(styles.linkHover, 'text-base ')}>About</div>
        {/* </Link> */}
        <Link target='_blank' href='https://docs.dapplets.org/docs/'>
          <div className={cn(styles.linkHover, 'text-base ')}>Documentation</div>
        </Link>
      </div>

      <div className={cn(styles.mode)} onClick={toggleDarkMode}>
        <ThemeImage
          width={34}
          height={34}
          alt='darkMode'
          src='icons/header/theme-switcher.svg'
        />
      </div>
    </div>
  );
}
