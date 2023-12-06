import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import cn from 'classnames';
import Head from 'next/head';
import { useTheme } from 'next-themes';
interface LayoutProps extends PropsWithChildren {
  title?: string | ReactNode;
  setTitle?: any;
  description?: string;
}
const links = [
  {
    rel: 'apple-touch-icon',
    type: '',
    sizes: '180x180',
    href: 'favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: 'favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: 'favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: '',
    sizes: '<generated>',
    href: 'favicon/favicon.ico',
  },
];

export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        {links.map((link, i) => (
          <link
            key={i}
            rel={link.rel}
            type={link.type}
            sizes={link.sizes}
            href={
              theme === 'dark'
                ? '/themes/dark/' + link.href
                : '/themes/light/' + link.href
            }
          />
        ))}

        <link rel='manifest' href='/manifest.json'></link>
        <meta name='theme-color' content='#e7ecef' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div
        className={cn(
          styles.wrapper,
          'dark:backgroundDark min-h-screen bg-dpl-white dark:bg-dpl-black'
        )}
      >
        <div className={cn(styles.menu)}>
          <Header />
        </div>

        {children}
        <div className={styles.delimeter}></div>

        <Footer />
      </div>
    </>
  );
};
