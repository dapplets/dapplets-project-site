import Link from 'next/link';
import styles from './Header.module.scss';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { ThemeImage } from '../ThemeImage';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Documentation',
    path: 'https://docs.dapplets.org/docs/',
  },
];

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  const [isMobileMenu, setMobileMenu] = useState(false);
  function toggleDarkMode() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }
  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 1025) {
        } else {
          setMobileMenu(false);
        }
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      updateDimensions();
    };
  }, [isMobileMenu]);

  return (
    <div
      className={cn(
        styles.wrapper,
        'fonts container-xl  max-mob:px-20 mx-auto flex items-center justify-between py-15 max-lg:px-10 max-lg:py-10'
      )}
    >
      <Link className={cn(styles.linkHover, ' text-base')} href='/'>
        <ThemeImage
          width={178}
          height={50}
          alt='logo'
          src='icons/header/logo.svg'
          className='max-mob:logo-tab'
        />
      </Link>
      <div
        className={cn(
          styles.linkBlock,
          'grow-1  max-mob:hidden flex justify-between '
        )}
      >
        {menuItems.map((menuItem, i) => (
          <Link key={i} href={menuItem.path}>
            <div
              className={cn(
                styles.linkHover,
                {
                  [styles.active]: pathname === menuItem.path,
                },
                'text-base'
              )}
            >
              {menuItem.title}
            </div>
          </Link>
        ))}
      </div>

      <div
        className={cn(styles.mode, 'max-mob:ml-auto max-mob:mr-5')}
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
          'max-mob:flex max-mob:flex-col max-mob:justify-center  mob:hidden max-xl:items-center xl:hidden'
        )}
      >
        <div className={cn(styles.burgerMedium)}> </div>
      </div>
      {isMobileMenu && (
        <div id='mobile' className={cn(styles.mobileMenu, 'flex flex-col')}>
          <div
            className={cn(
              styles.mobileMenuWrapper,
              'flex h-full w-full flex-col items-center p-10'
            )}
          >
            <div className={cn(styles.mobileMenuTop, 'flex h-9 w-full ')}>
              <Link className={cn(styles.linkHover, ' text-base')} href='/'>
                <ThemeImage
                  width={178}
                  height={50}
                  alt='logo'
                  src='icons/header/logo.svg'
                  className='max-mob:logo-tab'
                />
              </Link>
              <div
                className={cn(styles.mode, 'max-mob:ml-auto max-mob:mr-5')}
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
                  'max-mob:flex max-mob:flex-col max-mob:items-center  max-mob:justify-center mob:hidden xl:hidden'
                )}
              >
                <div className={cn(styles.burgerMedium)}> </div>
              </div>
            </div>
            <div
              className={cn(
                styles.mobileMenuMedium,
                'flex h-full w-full flex-auto flex-col'
              )}
            >
             { menuItems.map((menuItem, i) => (
               <Link key={i} href={menuItem.path} className='ml-auto'>
               <div
                 className={cn(
                   styles.linkHover,
                   {
                    [styles.active]: pathname === menuItem.path,
                   },
                   'text-base '
                 )}
               >
                 {menuItem.title}
               </div>
             </Link>
             ))}
            
            </div>
            <div
              className={cn(
                styles.mobileMenuBottom,
                'mt-auto flex w-full justify-between'
              )}
            >
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
