import styles from "./Button.module.scss";
import Image from "next/image";
import cn from "classnames";
export interface ButtonProps {
  text: string;
  link?: string;
  icon?: string;
  isPrimary?: boolean;
  isOutline?: boolean;
}
export function Button({
  text,
  link,
  icon,
  isPrimary,
  isOutline,
}: ButtonProps) {
  return (
    <div className={cn(styles.wrapper)}>
      {link ? (
        <a
          className={cn(styles.buttonDefault, "fonts", {
            [styles.buttonPrimary]: isPrimary,
            [styles.buttonOutline]: isOutline,
          })}
          rel="noopener noreferrer"
          target="_blank"
          href="link"
        >
          {icon ? <Image className={cn(styles.img)} width={24} height={24} alt="" src={icon} /> : null}
          {text}
        </a>
      ) : (
        <button
          className={cn(styles.buttonDefault, "fonts", {
            [styles.buttonPrimary]: isPrimary,
            [styles.buttonOutline]: isOutline,
          })}
        >
          {icon ? <Image width={24} height={24} alt="" src={icon} /> : null}
          {text}
        </button>
      )}
    </div>
  );
}
