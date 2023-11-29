import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import cn from 'classnames';

interface LayoutProps extends PropsWithChildren {
  title?: string | ReactNode;
  setTitle?: any;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        'dark:backgroundDark min-h-screen bg-dpl-white dark:bg-dpl-black max-xl:overflow-x-hidden xl:overflow-x-hidden'
      )}
    >
      <div className={cn(styles.menu)}>
        <Header />
      </div>

      {children}
      <div className={styles.delimeter}></div>

      <Footer />
    </div>
  );
};
