import styles from "./Button.module.scss";
import Image from "next/image";
export interface ButtonProps {
  text: string;
  link?: string;
  icon?: string;
}
export function Button({ text, link, icon }: ButtonProps) {
  return (
    <div className={styles.wrapper}>
      {link ? (
        <a rel="noopener noreferrer" target="_blank" href="link">
          {icon ? <Image width={24} height={24} alt="" src={icon} /> : null}
          {text}
        </a>
      ) : (
        <button>
          {icon ? <Image width={24} height={24} alt="" src={icon} /> : null}
          {text}
        </button>
      )}
    </div>
  );
}
