import React from 'react';
import Link from 'next/link';
import styles from './FeaturesSection.module.scss';
import {
  PlatformFeatures,
  PlatformFeaturesMessage,
} from '@/constants/constantsText';
import { ThemeImage } from '../ThemeImage';
import cn from 'classnames';

const FeaturesSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.feature, styles['feature--1'])}>
        <h2 className={styles.title}>
          platform
          <span className={cn(styles.title, styles['title--color'])}>
            &nbsp;features
          </span>
        </h2>
        <FeatureLink />
      </div>
      {PlatformFeatures.map((feature, index) => (
        <FeatureBlock key={index} feature={feature} index={index} />
      ))}
    </div>
  );
};

const FeatureLink = () => {
  return (
    <Link
      prefetch={false}
      target='_blank'
      href='https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj'
      className={styles.link}
    >
      <div className={styles.linkBlock}>
        <div className={styles.linkText}>{PlatformFeaturesMessage}</div>
        <ThemeImage
          className={styles.link}
          width={50}
          height={50}
          alt='arrow'
          src='icons/link/arrow.svg'
        />
      </div>
    </Link>
  );
};

function FeatureBlock({
  feature,
  index,
}: {
  feature: (typeof PlatformFeatures)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div className={cn(styles.feature, styles[`feature--${index + 2}`])}>
      {isEven && <FeatureImage src={`icons/home/feature-${index + 1}.svg`} />}

      <div className={styles.itemsBlock}>
        <div className={styles.itemContainer}>{feature.id}</div>
        {feature.features.map((item, i) => (
          <FeatureItem key={i} item={item} />
        ))}
      </div>

      {!isEven && <FeatureImage src={`icons/home/feature-${index + 1}.svg`} />}
    </div>
  );
}

function FeatureImage({ src }: { src: string }) {
  return (
    <div className={styles.imgContainer}>
      <ThemeImage
        width={395}
        height={275}
        alt='feature'
        src={src}
        className={styles.img}
        style={{ transform: 'none', cursor: 'default' }}
      />
    </div>
  );
}

function FeatureItem({
  item,
}: {
  item: (typeof PlatformFeatures)[0]['features'][0];
}) {
  return (
    <Link prefetch={false} target='_blank' href={item.link}>
      <div className={styles.item}>
        <div className={styles.itemTitle}>{item.title}</div>
        <div className={styles.text}>{item.text}</div>
      </div>
    </Link>
  );
}

export default FeaturesSection;
