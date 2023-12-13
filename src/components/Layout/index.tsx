import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import cn from 'classnames';
import Head from 'next/head';
import { useCurrentTheme } from '@/hooks/useCurrentTheme';

interface LayoutProps extends PropsWithChildren {
  title?: string | ReactNode;
  setTitle?: any;
  description?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title, description }) => {
  const theme = useCurrentTheme();

  return (
    <>
      <Head>
        <link rel='icon' href={`/themes/${theme}/favicon/favicon.ico`} sizes='32x32' />
        <link rel='icon' href={`/themes/${theme}/favicon/favicon.\svg`} type='image/svg+xml' />
        <link rel='apple-touch-icon' href={`/themes/${theme}/favicon/apple-touch-icon.png`} />
        <link rel='manifest' href='/manifest.json' />
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
