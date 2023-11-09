import Link from "next/link";
import styles from "./Search.module.scss";
import search from "@/assets/icon/header/search-dark.svg";
import cn from "classnames";
import Image from "next/image";
export interface SearchProps {}
export function Search({}: SearchProps) {
  return (
    <div className={cn(styles.wrapper, "flex justify-between")}>
      <Image
        className={cn(styles.inputImg)}
        width={16}
        height={16}
        alt="logo"
        src={search}
      />

      <input
        className={cn(styles.input, 'text-base')}
        type="text"
        readOnly
        placeholder="Search documentation..."
        value=""
      />
    </div>
  );
}
