import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import cn from 'classnames';
import Head from 'next/head';
import { Metadata } from 'next';
interface LayoutProps extends PropsWithChildren {
  title?: string | ReactNode;
  setTitle?: any;
  description?: string;
}
export const metadata: Metadata = {
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/themes/dark/favicon/apple-touch-icon.png',
        href: '/themes/dark/favicon/apple-touch-icon.png',
        rel: 'apple-touch-icon',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/themes/dark/favicon/favicon-16x16.png',
        href: '/themes/dark/favicon/favicon-16x16.png',
        rel: 'icon',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/themes/dark/favicon/favicon-32x32.png',
        href: '/themes/dark/favicon/favicon-32x32.png',
        rel: 'icon',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/themes/dark/favicon/favicon.ico',
        href: '/themes/dark/favicon/favicon.ico',
        rel: 'icon',
      },
    ],
  },
};
export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/themes/dark/favicon/apple-touch-icon.png'
          media='(prefers-color-scheme: dark)'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          media='(prefers-color-scheme: dark)'
          href='/themes/dark/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/themes/dark/favicon/favicon-16x16.png'
          media='(prefers-color-scheme: dark)'
        />
        <link
          media='(prefers-color-scheme: dark)'
          rel='icon'
          href='/themes/dark/favicon/favicon.ico'
          sizes='<generated>'
        />
          <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/themes/light/favicon/apple-touch-icon.png'
          media='(prefers-color-scheme: light)'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          media='(prefers-color-scheme: light)'
          href='/themes/light/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/themes/light/favicon/favicon-16x16.png'
          media='(prefers-color-scheme: light)'
        />
        <link
          media='(prefers-color-scheme: light)'
          rel='icon'
          href='/themes/light/favicon/favicon.ico'
          sizes='<generated>'
        />
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
