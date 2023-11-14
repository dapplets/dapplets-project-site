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
    <div className='fonts container-xl max-xl:container-lg mx-auto flex items-center justify-between py-15'>
      <Link
        className={cn(styles.linkHover, 'max-xl:padding-global text-base')}
        href='/'
      >
        <ThemeImage
          width={178}
          height={50}
          alt='logo'
          src='icons/header/logo.svg'
          className='max-sm:logo-sm'
        />
      </Link>
      <div
        className={cn(
          styles.linkBlock,
          'grow-1 max-sm:container-max-auto max-sm:header-link-sm max-sm:padding-global flex justify-between max-sm:justify-around'
        )}
      >
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
