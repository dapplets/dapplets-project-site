import { FC, PropsWithChildren, ReactNode } from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface LayoutProps extends PropsWithChildren {
  title?: string | ReactNode;
  setTitle?: any;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className={
        'bg-dpl-white dark:bg-dpl-black min-h-screen max-xl:overflow-x-hidden'
      }
    >
      <Header />

      <div className={styles.delimeter}></div>
      {children}
      <div className={styles.delimeter}></div>

      <Footer />
    </div>
  );
};
