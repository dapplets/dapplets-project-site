import styles from "./Footer.module.scss";
import Image from "next/image";
import github from "@/assets/icon/footer/github-dark.svg";
import discord from "@/assets/icon/footer/diskord-dark.svg";
import heart from "@/assets/icon/footer/heart.svg";
import tg from "@/assets/icon/footer/tg-dark.svg";
import medium from "@/assets/icon/footer/medium-dark.svg";
import x from "@/assets/icon/footer/x-dark.svg";
import mail from "@/assets/icon/footer/mail-dark.svg";
export interface FooterProps {}

export function Footer() {
  return (
    <div className='fonts container-xl mx-auto flex'>
      <div className="flex">
        <div>© 2019—2023</div>
        <div><Image width={36} height={36} alt="" src={heart} /></div>
        <div>by</div>
        <div>Dapplets Project</div>
      </div>
      <div className="flex">
      <Image width={36} height={36} alt="github" src={github} />
      <Image width={36} height={36} alt="discord" src={discord} />
      <Image width={36} height={36} alt="tg" src={tg} />
      <Image width={36} height={36} alt="medium" src={medium} />
      <Image width={36} height={36} alt="x" src={x} />
      <Image width={36} height={36} alt="mail" src={mail} />
      </div>
    </div>
  );
}
