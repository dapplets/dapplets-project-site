/* eslint-disable */
import { FC, PropsWithChildren, ReactNode } from "react";

import styles from "./Layout.module.scss";

import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProps extends PropsWithChildren {
  className?: string;
  title?: string | ReactNode;
  setTitle?: any;
  darkMode: boolean;
  toggleDarkMode: any;
}

export const Layout: FC<LayoutProps> = ({
  className = "",
  title,
  children,
  setTitle,
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <div className={darkMode ? "dark" : "ligth"}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} />
      <div className={darkMode ? styles.delimeterDark : styles.delimeterDarkLigth}></div>
      {children}
      <div className={darkMode ? styles.delimeterDark : styles.delimeterDarkLigth}></div>

      <Footer />
    </div>
  );
};
