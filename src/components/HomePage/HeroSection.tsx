import React, { FC } from 'react';
import { Button } from '../Button';
import styles from './HeroSection.module.scss';
import SupportedBySection from './SupportedBySection';

const HeroSection: FC<{ subtitle: string }> = ({ subtitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleBlock}>
        <div className={styles.title}>
          The Home <br />
          of Mutable Web
        </div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
      <div className={styles.buttons}>
        <Button
          link='https://chromewebstore.google.com/detail/mutable-web/cnahdmdbhkphpbpbjjbfdnmbphbenglc'
          text='Get started'
          isPrimary
          icon='icons/button/download.svg'
        />
        <Button
          text='Visit Github'
          isOutline
          icon='icons/button/github.svg'
          link='https://github.com/dapplets'
        />
      </div>
      <SupportedBySection />
    </div>
  );
};

export default HeroSection;
