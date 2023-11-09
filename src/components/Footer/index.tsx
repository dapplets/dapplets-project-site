import styles from "./Footer.module.scss";
import Image from "next/image";
import github from "@/assets/icon/footer/github-dark.svg";
import discord from "@/assets/icon/footer/diskord-dark.svg";
import heart from "@/assets/icon/footer/heart.svg";
import tg from "@/assets/icon/footer/tg-dark.svg";
import medium from "@/assets/icon/footer/medium-dark.svg";
import x from "@/assets/icon/footer/x-dark.svg";
import mail from "@/assets/icon/footer/mail-dark.svg";
import cn from "classnames";
export interface FooterProps {}

export function Footer() {
  return (
    <div className={cn(styles.wrapper, "fonts container-xl mx-auto flex justify-between")}>
      <div className={cn(styles.copy,"flex content-center justify-between")}>
        <div className={cn(styles.copyText,"flex fonts text-base")}>© 2019—2023</div>
        <div className={cn(styles.copyImg,"flex")}>
          <Image width={36} height={36} alt="" src={heart} />
        </div>
        <div className={cn(styles.copyText,"flex fonts text-base")}>by</div>
        <div className={cn(styles.copyUnderline,"flex fonts text-base")}>Dapplets Project</div>
      </div>
      <div className={cn(styles.links, "flex justify-between content-center")}>
        <Image className={cn(styles.img, "")} width={36} height={36} alt="github" src={github} />
        <Image className={cn(styles.img, "")} width={36} height={36} alt="discord" src={discord} />
        <Image className={cn(styles.img, "")} width={36} height={36} alt="tg" src={tg} />
        <Image className={cn(styles.img, "")} width={36} height={36} alt="medium" src={medium} />
        <Image className={cn(styles.img, "")} width={36} height={36} alt="x" src={x} />
        <Image className={cn(styles.img, "")} width={36} height={36} alt="mail" src={mail} />
      </div>
    </div>
  );
}
