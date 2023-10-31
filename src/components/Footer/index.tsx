import styles from "./Footer.module.scss";
export interface FooterProps {}
export function Footer() {
  return (
    <div className={styles.wrapper}>
      <div>copy</div>
      <div>Links</div>
    </div>
  );
}
