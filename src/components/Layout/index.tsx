/* eslint-disable */
import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useTheme } from 'next-themes';
import cn from 'classnames';

interface LayoutProps extends PropsWithChildren {
  title?: string | ReactNode;
  setTitle?: any;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={cn(resolvedTheme, 'max-xl:overflow-x-hidden')}>
      <Header />
      <div
        className={
          resolvedTheme === 'dark'
            ? styles.delimeterDark
            : styles.delimeterDarkLight
        }
      ></div>
      {children}
      <div
        className={
          resolvedTheme === 'dark'
            ? styles.delimeterDark
            : styles.delimeterDarkLight
        }
      ></div>

      <Footer />
    </div>
  );
};
