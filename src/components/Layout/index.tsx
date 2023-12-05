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

export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const { theme } = useTheme();

  return (
    <>
      <Head> 
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={
            theme === 'dark'
              ? '/themes/dark/favicon/apple-touch-icon.png'
              : '/themes/light/favicon/apple-touch-icon.png'
          }
        />

        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={
            theme === 'dark'
              ? '/themes/dark/favicon/favicon-32x32.png'
              : '/themes/light/favicon/favicon-32x32.png'
          }
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={
            theme === 'dark'
              ? '/themes/dark/favicon/favicon-16x16.png'
              : '/themes/light/favicon/favicon-16x16.png'
          }
        />
        <link
          rel='icon'
          href={
            theme === 'dark'
              ? '/themes/dark/favicon/favicon.ico'
              : '/themes/light/favicon/favicon.ico'
          }
          sizes='<generated>'
        />
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
