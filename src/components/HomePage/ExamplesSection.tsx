import React from 'react';
import styles from './ExamplesSection.module.scss';
import { ThemeImage } from '../ThemeImage';
import { PowerDapplets } from '@/constants/constantsText';
import Link from 'next/link';

const ExamplesSection = () => {
  return (
    <div className={styles.exampleWrapper}>
      <div className={styles.exampleTitle}>
        mutations{' '}
        <span className={styles.exampleTitleColor}>&nbsp;example</span>
      </div>
      <div className={styles.powerItemsContainer}>
        {PowerDapplets.map((dapplet, i) => (
          <DappletExample key={i} dapplet={dapplet} />
        ))}
      </div>
    </div>
  );
};

function DappletExample({ dapplet }: { dapplet: (typeof PowerDapplets)[0] }) {
  return (
    <div className={styles.powerItem}>
      <div className={styles.powerImg}>
        <ThemeImage
          className={styles.powerImage}
          width={390}
          height={407}
          alt={dapplet.title}
          src={dapplet.image}
          style={{ transform: 'none', cursor: 'default' }}
        />
      </div>

      <Link
        className={styles.powerItemLink}
        prefetch={false}
        href={dapplet.link}
        target='_blank'
      >
        <div className={styles.powerTitle}>{dapplet.title}</div>
        <div className={styles.powerText}>{dapplet.text}</div>
      </Link>

      <div className={styles.powerTextBlockTablet}>
        <Link prefetch={false} href={dapplet.link} target='_blank'>
          <div className={styles.powerTitle}>{dapplet.title}</div>
        </Link>
        <div className={styles.powerText}>{dapplet.text}</div>
      </div>
    </div>
  );
}

export default ExamplesSection;
