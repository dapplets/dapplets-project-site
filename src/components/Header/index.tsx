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
    <div
      className={cn(
        styles.wrapper,
        'fonts container-xl  mx-auto flex items-center justify-between py-15 max-xl:px-20 max-lg:px-10 max-lg:py-10'
      )}
    >
      <Link className={cn(styles.linkHover, ' text-base')} href='/'>
        <ThemeImage
          width={178}
          height={50}
          alt='logo'
          src='icons/header/logo.svg'
          className='max-xl:logo-tab'
        />
      </Link>
      <div
        className={cn(
          styles.linkBlock,
          'grow-1  flex justify-between max-xl:hidden '
        )}
      >
        <Link href='/'>
          <div className={cn(styles.linkHover, 'text-base ')}>Home</div>
        </Link>
        {/* <Link href="/about"> */}
        <div className={cn(styles.linkHover, 'text-base ')}>About</div>
        {/* </Link> */}
        <Link target='_blank' href='https://docs.dapplets.org/docs/'>
          <div className={cn(styles.linkHover, 'text-base ')}>
            Documentation
          </div>
        </Link>
      </div>

      <div className={cn(styles.mode,'max-xl:ml-auto max-xl:mr-5')} onClick={toggleDarkMode}>
        <ThemeImage
          width={34}
          height={34}
          alt='darkMode'
          src='icons/header/theme-switcher.svg'
        />
      </div>
      <div
        className={cn(styles.burger, 'max-xl:flex max-xl:flex-col max-xl:items-center  max-xl:justify-center xl:hidden')}
      >
        <div className={cn(styles.burgerMedium)}> </div>
      </div>
    </div>
  );
}
