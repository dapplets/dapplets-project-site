/* eslint-disable */
import { FC, PropsWithChildren, ReactNode } from 'react';

import styles from './Layout.module.scss';

import { Header } from '../Header';
import { Footer } from '../Footer';
import cn from 'classnames';
interface LayoutProps extends PropsWithChildren {
  className?: string;
  title?: string | ReactNode;
  setTitle?: any;
  darkMode: boolean;
  toggleDarkMode: any;
  isMatches: boolean;
}

export const Layout: FC<LayoutProps> = ({
  className = '',
  title,
  children,
  setTitle,
  darkMode,
  toggleDarkMode,
  isMatches,
}) => {
  // 'dark:dark',
  return (
    <div className={cn(darkMode ? 'dark' : 'ligth','max-xl:overflow-x-hidden')}>
      <Header
        isMatches={isMatches}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={darkMode}
      />
      <div
        className={
          isMatches && darkMode
            ? styles.delimeterDark
            : !isMatches && darkMode
              ? styles.delimeterDark
              : styles.delimeterDarkLigth
        }
      ></div>
      {children}
      <div
        className={
          isMatches && darkMode
            ? styles.delimeterDark
            : !isMatches && darkMode
              ? styles.delimeterDark
              : styles.delimeterDarkLigth
        }
      ></div>

      <Footer isMatches={isMatches} isDarkMode={darkMode} />
    </div>
  );
};
