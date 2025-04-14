import React, { FC } from 'react';
import styles from './HowItWorksSection.module.scss';
import { ThemeImage } from '../ThemeImage';
import cn from 'classnames';
import { HowItWorksItems } from '@/constants/constantsText';

const HowItWorksSection: FC<{
  title: string;
  subtitle: string;
}> = ({ title, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.imgBlock}>
        <div className={styles.tablet}>
          <ThemeImage
            className={styles.tabletImg}
            width={425}
            height={354}
            alt='How it works?'
            src='icons/home/tablet/home/how-tab.svg'
            style={{ transform: 'none', cursor: 'default' }}
            priority
          />
          <div className={styles.itemWrapper}>
            {HowItWorksItems.map(
              (x: (typeof HowItWorksItems)[0], i: number) => (
                <HowItWorksItem key={i} item={x} index={i} />
              )
            )}
          </div>
        </div>
        <ThemeImage
          className={styles.deskImg}
          width={1300}
          height={511}
          alt='How it works?'
          src='icons/home/big-how.svg'
          style={{ transform: 'none', cursor: 'default' }}
          priority
        />
      </div>
    </div>
  );
};

function HowItWorksItem({
  item,
  index,
}: {
  item: (typeof HowItWorksItems)[0];
  index: number;
}) {
  return (
    <div className={styles.item}>
      <div
        className={cn(
          styles.itemTitle,
          index == 1 && styles['itemTitle--color']
        )}
      >
        {item.title}
      </div>
      <div className={styles.itemText}>{item.text}</div>
    </div>
  );
}

export default HowItWorksSection;
