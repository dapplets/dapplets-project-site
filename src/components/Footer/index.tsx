import styles from './Footer.module.scss';
import Image from 'next/image';
import github from '@/assets/icon/footer/github-dark.svg';
import discord from '@/assets/icon/footer/diskord-dark.svg';
import heart from '@/assets/icon/footer/heart.svg';
import tg from '@/assets/icon/footer/tg-dark.svg';
import medium from '@/assets/icon/footer/medium-dark.svg';
import x from '@/assets/icon/footer/x-dark.svg';
import mail from '@/assets/icon/footer/mail-dark.svg';
import githubLight from '@/assets/icon/footer/github.svg';
import discordLight from '@/assets/icon/footer/discord.svg';
import tgLight from '@/assets/icon/footer/tg.svg';
import mediumLight from '@/assets/icon/footer/medium.svg';
import xLight from '@/assets/icon/footer/x.svg';
import mailLight from '@/assets/icon/footer/mail.svg';
import cn from 'classnames';
import Link from 'next/link';
import { ThemeImage } from '../ThemeImage';

export function Footer() {
  return (
    <div
      className={cn(
        styles.wrapper,
        'fonts container-xl max-xl:container-lg max-md:padding-global mx-auto flex justify-between max-sm:flex-col max-sm:items-center'
      )}
    >
      <div className={cn(styles.copy, 'flex items-center justify-between')}>
        <div
          className={cn(styles.copyText, 'fonts flex items-center text-base')}
        >
          © 2019—2023
        </div>
        <div className={cn(styles.copyImg, 'flex items-center')}>
          <Image width={36} height={36} alt='' src={heart} />
        </div>
        <div
          className={cn(styles.copyText, 'fonts flex items-center text-base')}
        >
          by
        </div>
        <div
          className={cn(
            styles.copyUnderline,
            'fonts flex items-center text-base'
          )}
        >
          Dapplets Project
        </div>
      </div>
      <div
        className={cn(
          styles.links,
          'max-sm:sm-padding-top-20 flex items-center justify-between'
        )}
      >
        <Link target='_blank' href='https://github.com/dapplets'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='github'
            srcDark={github}
            srcLight={githubLight}
          />
        </Link>

        <Link target='_blank' href='https://discord.gg/YcxbkcyjMV'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='discord'
            srcDark={discord}
            srcLight={discordLight}
          />
        </Link>

        <Link target='_blank' href='https://t.me/dapplets'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='tg'
            srcDark={tg}
            srcLight={tgLight}
          />
        </Link>

        <Link target='_blank' href='https://medium.com/@dapplets'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='medium'
            srcDark={medium}
            srcLight={mediumLight}
          />
        </Link>

        <Link target='_blank' href='https://twitter.com/dapplets_org'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='x'
            srcDark={x}
            srcLight={xLight}
          />
        </Link>

        <Link target='_blank' href='mailto:business@dapplets.org'>
          <ThemeImage
            className={cn(styles.img, '')}
            width={36}
            height={36}
            alt='mail'
            srcDark={mail}
            srcLight={mailLight}
          />
        </Link>
      </div>
    </div>
  );
}
