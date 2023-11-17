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
        'min-h-screen bg-dpl-white dark:backgroundDark dark:bg-dpl-black xl:overflow-x-hidden max-xl:overflow-x-hidden'
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
