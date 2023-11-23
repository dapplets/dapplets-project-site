import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { ThemeImage } from '../ThemeImage';
import { useState } from 'react';

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMobileMenu, setMobileMenu] = useState(false);
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

      <div
        className={cn(styles.mode, 'max-xl:ml-auto max-xl:mr-5')}
        onClick={toggleDarkMode}
      >
        <ThemeImage
          width={34}
          height={34}
          alt='darkMode'
          src='icons/header/theme-switcher.svg'
        />
      </div>
      <div
        onClick={() => setMobileMenu(!isMobileMenu)}
        className={cn(
          styles.burger,
          'max-xl:flex max-xl:flex-col max-xl:items-center  max-xl:justify-center xl:hidden'
        )}
      >
        <div className={cn(styles.burgerMedium)}> </div>
      </div>
      {isMobileMenu && (
        <div className={cn(styles.mobileMenu, 'flex flex-col')}>
          <div className={cn(styles.mobileMenuWrapper, 'flex w-full flex-col h-full p-10 items-center')}>
            <div className={cn(styles.mobileMenuTop, 'flex w-full h-9 ')}>
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
                className={cn(styles.mode, 'max-xl:ml-auto max-xl:mr-5')}
                onClick={toggleDarkMode}
              >
                <ThemeImage
                  width={34}
                  height={34}
                  alt='darkMode'
                  src='icons/header/theme-switcher.svg'
                />
              </div>
              <div
                onClick={() => setMobileMenu(!isMobileMenu)}
                className={cn(
                  styles.burger,
                  'max-xl:flex max-xl:flex-col max-xl:items-center  max-xl:justify-center xl:hidden'
                )}
              >
                <div className={cn(styles.burgerMedium)}> </div>
              </div>
            </div>
            <div
              className={cn(styles.mobileMenuMedium, 'flex w-full flex-col h-full flex-auto')}
            >
              <Link href='/' className='ml-auto'>
                <div className={cn(styles.linkHover, 'text-base ')}>Home</div>
              </Link>
              {/* <Link href="/about" className='ml-auto w-full' > */}
              <div className={cn(styles.linkHover, ' text-base ml-auto ')}>
                About
              </div>
              {/* </Link> */}
              <Link
                target='_blank'
                href='https://docs.dapplets.org/docs/'
                className='ml-auto'
              >
                <div className={cn(styles.linkHover, 'text-base ')}>
                  Documentation
                </div>
              </Link>
            </div>
            <div  className={cn(styles.mobileMenuBottom, 'flex w-full mt-auto justify-between')}>
            <Link target='_blank' href='https://github.com/dapplets'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='GitHub'
            src='icons/footer/github.svg'
          />
        </Link>

        <Link target='_blank' href='https://discord.gg/YcxbkcyjMV'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='Discord'
            src='icons/footer/discord.svg'
          />
        </Link>

        <Link target='_blank' href='https://t.me/dapplets'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='Telegram'
            src='icons/footer/tg.svg'
          />
        </Link>

        <Link target='_blank' href='https://medium.com/@dapplets'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='Medium'
            src='icons/footer/medium.svg'
          />
        </Link>

        <Link target='_blank' href='https://twitter.com/dapplets_org'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='X (former Twitter)'
            src='icons/footer/x.svg'
          />
        </Link>

        <Link target='_blank' href='mailto:business@dapplets.org'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='Email'
            src='icons/footer/email.svg'
          />
        </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
