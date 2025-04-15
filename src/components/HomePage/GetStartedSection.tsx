import React from 'react';
import styles from './GetStartedSection.module.scss';
import { getStartedLinks, getStartedMessage } from '@/constants/constantsText';
import { LinkBlock } from '../LinkBlock';

const GetStartedSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>{getStartedMessage.title}</div>
        <div className={styles.text}>{getStartedMessage.content}</div>
      </div>
      {getStartedLinks.map((x, i) => (
        <LinkBlock key={i} content={x} />
      ))}
    </div>
  );
};

export default GetStartedSection;
