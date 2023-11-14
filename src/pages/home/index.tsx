'use client';
import Link from 'next/link';
import styles from './Home.module.scss';
import {
  HomeTitle,
  HowItWorks,
  HowItWorksItems,
  PlatformFeatures,
  PlatformFeaturesMessage,
  PowerDapplets,
  getStartedLinks,
  getStartedMessage,
  powerIconLight,
} from '@/constants/constantsText';
import { LinkBlock } from '@/components/LinkBlock';
import near from '@/assets/icon/home/near-dark.svg';
import proxy from '@/assets/icon/home/proxy-dark.svg';
import swarm from '@/assets/icon/home/swarm-dark.svg';
import boss from '@/assets/icon/home/boss-dark.svg';
import hack from '@/assets/icon/home/hack-dark.svg';
import nearLight from '@/assets/icon/home/near.svg';
import proxyLight from '@/assets/icon/home/proxy.svg';
import swarmLight from '@/assets/icon/home/swarm.svg';
import bossLight from '@/assets/icon/home/boss.svg';
import hackLight from '@/assets/icon/home/hack.svg';
import encode from '@/assets/icon/home/encode-dark.svg';
import encodeLight from '@/assets/icon/home/encode.svg';
import download from '@/assets/icon/button/download_dark.svg';
import github from '@/assets/icon/button/github_dark.svg';
import Image from 'next/image';
import how from '@/assets/icon/home/big-how-dark.svg';
import howLight from '@/assets/icon/home/big-how.svg';
import feature1 from '@/assets/icon/home/feature-1-dark.svg';
import feature2 from '@/assets/icon/home/feature-2-dark.svg';
import feature3 from '@/assets/icon/home/feature-3-dark.svg';
import feature1Light from '@/assets/icon/home/feature-1.svg';
import feature2Light from '@/assets/icon/home/feature-2.svg';
import feature3Light from '@/assets/icon/home/feature-3.svg';
import arrow from '@/assets/icon/link/arrow-dark.svg';
import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';
import { NextPage } from 'next';
import cn from 'classnames';
import { useEffect, useState } from 'react';
export interface HomeProps {
  isDarkMode: boolean;
}

function Home({}: NextPage) {
  const [isDarkMode, setDarkMode] = useState(true);
  const [isMatches, setMatches] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setMatches(true);
      }
    }
  }, [isMatches]);
  useEffect(() => {}, [isDarkMode]);
  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
    const root = window.document.documentElement;
    root.classList.toggle('dark');
  }

  return (
    <Layout
      isMatches={isMatches}
      darkMode={isDarkMode}
      toggleDarkMode={toggleDarkMode}
    >
      <div className='fonts container-xl max-xl:container-lg mx-auto flex flex-col max-xl:gap-y-40 '>
        <div
          className={cn(
            isMatches && isDarkMode
              ? styles.titleWrapper
              : !isMatches && isDarkMode
                ? styles.titleWrapper
                : styles.titleWrapperLigth,
            'max-md:padding-global flex flex-col'
          )}
        >
          <div
            className={cn(
              styles.titleBlock,
              'fonts mx-auto  flex flex-col items-center'
            )}
          >
            <div
              className={cn(
                styles.titleBlockTitle,
                'fonts max-lg:fonts-title-mobile  flex'
              )}
            >
              {HomeTitle.title}
            </div>
            <div
              className={cn(
                styles.titleBlockSubtitle,
                'fonts flex text-base opacity-70'
              )}
            >
              {HomeTitle.subtitle}
            </div>
          </div>
          <div
            className={cn(styles.titleButtons, 'mx-auto flex justify-between')}
          >
            <Button
              link='https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj'
              text='Get started'
              isPrimary
              icon={download}
            />
            <Button
              text='Visit Github'
              isOutline
              icon={github}
              link='https://github.com/dapplets'
            />
          </div>
          <div className={cn(styles.supportedLableBlock, 'flex flex-col')}>
            <div
              className={cn(
                styles.supportedLable,
                'fonts flex text-base opacity-70'
              )}
            >
              Supported by:
            </div>
            <div
              className={cn(
                styles.supportedBlock,
                'max-lg:padding-global-x-mobile flex items-center justify-between opacity-70  max-xl:flex-wrap max-sm:flex-col'
                //
              )}
            >
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='near'
                src={
                  isMatches && isDarkMode
                    ? near
                    : !isMatches && isDarkMode
                      ? near
                      : nearLight
                }
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='proxy'
                src={
                  isMatches && isDarkMode
                    ? proxy
                    : !isMatches && isDarkMode
                      ? proxy
                      : proxyLight
                }
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='swarm'
                src={
                  isMatches && isDarkMode
                    ? swarm
                    : !isMatches && isDarkMode
                      ? swarm
                      : swarmLight
                }
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='boss'
                src={
                  isMatches && isDarkMode
                    ? boss
                    : !isMatches && isDarkMode
                      ? boss
                      : bossLight
                }
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='hack'
                src={
                  isMatches && isDarkMode
                    ? hack
                    : !isMatches && isDarkMode
                      ? hack
                      : hackLight
                }
              />

              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='encode'
                src={
                  isMatches && isDarkMode
                    ? encode
                    : !isMatches && isDarkMode
                      ? encode
                      : encodeLight
                }
              />
            </div>
          </div>
        </div>
        <div
          className={cn(
            styles.howWrapper,
            'max-md:padding-global max-sm:sm-padding-top-0 flex flex-col'
          )}
        >
          <div className='fonts mx-auto flex flex-col justify-center'>
            <div className={cn(styles.howTitle, 'fonts flex justify-center')}>
              {HowItWorks.title}
            </div>
            <div
              className={cn(
                styles.howSubitle,
                'fonts flex justify-center text-center text-base opacity-70'
              )}
            >
              {HowItWorks.subtitle}
            </div>
          </div>
          {/* todo: remove whem will animation */}
          <div className='flex'>
            {/* <div>
            {HowItWorksItems.map((x, i) => (
              <div className="flex flex-col" key={i}>
                <div>{x.title}</div>
                <div>{x.text}</div>
              </div>
            ))}
          </div> */}

            <Image
              className='max-xl:container-100'
              width={1300}
              height={511}
              alt='how'
              src={
                isMatches && isDarkMode
                  ? how
                  : !isMatches && isDarkMode
                    ? how
                    : howLight
              }
            />
          </div>
          {/* <div>points</div> */}
        </div>
        <div
          className={cn(
            styles.exampleWrapper,
            'max-md:padding-global max-md:padding-y max-md:container-100 max-sm:sm-padding-top-0 mx-auto flex flex-col max-md:items-center'
          )}
        >
          <div className={cn(styles.exampleTitle, 'fonts flex')}>
            Dapplets{' '}
            <div className={cn(styles.exampleTitleColor, 'fonts flex')}>
              &nbsp;example
            </div>
          </div>
          <div className='flex justify-between max-xl:flex-wrap max-xl:gap-y-40 max-md:flex-col max-md:items-center '>
            {PowerDapplets.map((x, i) => (
              <div
                className={cn(
                  styles.powerItem,
                  'max-md:container-100 flex flex-col'
                )}
                key={i}
              >
                <div className={cn(styles.powerImg, '')}>
                  <Image
                    className='max-md:global-w-80'
                    width={407}
                    height={407}
                    alt='power'
                    src={
                      isMatches && isDarkMode
                        ? x.icon
                        : !isMatches && isDarkMode
                          ? x.icon
                          : powerIconLight[i]
                    }
                  />
                </div>
                <div className={cn(styles.powerTitle, 'fonts')}>{x.title}</div>
                <div
                  className={cn(styles.powerText, 'fonts text-base opacity-70')}
                >
                  {x.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={cn(
            styles.featureWrapper,
            'max-xl:padding-y max-md:padding-global mx-auto flex flex-col'
          )}
        >
          <div
            className={cn(
              styles.feature1,
              'max-md:width-100-mobile flex items-center max-md:flex-wrap max-sm:sm-global-w'
            )}
          >
            <div className={cn(styles.exampleTitle, 'fonts flex items-center')}>
              platform
              <div className={cn(styles.exampleTitleColor, 'fonts flex')}>
                &nbsp;features
              </div>
            </div>
            <div
              className={cn(
                styles.featureTextBlock,
                'fonts max-md:width-100-mobile flex  items-center justify-between max-md:left-auto '
              )}
            >
              <div
                className={cn(
                  styles.featureText,
                  'max-md:padding-y opacity-70 max-md:left-auto '
                )}
              >
                {PlatformFeaturesMessage}
              </div>
              <Link
                className={cn(styles.featureLink, '')}
                target='_blank'
                href='https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj'
              >
                <Image width={50} height={50} alt='power' src={arrow} />
              </Link>
            </div>
          </div>
          <div
            className={cn(
              styles.feature2,
              'flex items-center gap-x-40 gap-y-40 max-xl:flex-wrap'
            )}
          >
            <div className={cn(styles.featureImg, 'flex max-xl:hidden')}>
              <Image
                width={407}
                height={520}
                alt='power'
                src={
                  isMatches && isDarkMode
                    ? feature1
                    : !isMatches && isDarkMode
                      ? feature1
                      : feature1Light
                }
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                'max-xl:container-auto flex gap-x-40 gap-y-40 max-xl:flex-wrap'
              )}
            >
              <div
                className={cn(
                  isMatches && isDarkMode
                    ? styles.featureId
                    : !isMatches && isDarkMode
                      ? styles.featureId
                      : styles.featureIdLight,
                  'fonts flex'
                )}
              >
                {PlatformFeatures[0].id}
              </div>
              <div
                className={cn(
                  styles.featureImgXl,
                  'flex max-md:hidden xl:hidden'
                )}
              >
                <Image
                  width={407}
                  height={240}
                  alt='power'
                  src={
                    isMatches && isDarkMode
                      ? feature1
                      : !isMatches && isDarkMode
                        ? feature1
                        : feature1Light
                  }
                />
              </div>

              {PlatformFeatures[0].features.map((x, i) => (
                <Link key={i} target='_blank' href={x.link}>
                  <div
                    className={cn(
                      isMatches && isDarkMode
                        ? styles.featureItem
                        : !isMatches && isDarkMode
                          ? styles.featureItem
                          : styles.featureItemLight,
                      'flex flex-col'
                    )}
                  >
                    <div className={cn(styles.featureItemTitle, 'fonts flex')}>
                      {x.title}
                    </div>
                    <div
                      className={cn(
                        styles.featureItemText,
                        'fonts flex text-base opacity-70'
                      )}
                    >
                      {x.text}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div
            className={cn(
              styles.feature3,
              'flex items-center gap-x-40  gap-y-40  max-xl:flex-wrap'
            )}
          >
            <div
              className={cn(
                styles.featureItemsBlock,
                'max-xl:container-auto flex gap-y-40 max-xl:flex-wrap'
              )}
            >
              <div
                className={cn(
                  isMatches && isDarkMode
                    ? styles.featureId
                    : !isMatches && isDarkMode
                      ? styles.featureId
                      : styles.featureIdLight,
                  'fonts flex'
                )}
              >
                {PlatformFeatures[1].id}
              </div>
              <Link target='_blank' href={PlatformFeatures[1].features[0].link}>
                <div
                  className={cn(
                    isMatches && isDarkMode
                      ? styles.featureItem
                      : !isMatches && isDarkMode
                        ? styles.featureItem
                        : styles.featureItemLight,
                    'flex flex-col'
                  )}
                >
                  <div className={cn(styles.featureItemTitle, 'fonts flex')}>
                    {PlatformFeatures[1].features[0].title}
                  </div>
                  <div
                    className={cn(
                      styles.featureItemText,
                      'fonts flex text-base opacity-70'
                    )}
                  >
                    {PlatformFeatures[1].features[0].text}
                  </div>
                </div>
              </Link>
            </div>
            <div className={cn(styles.featureImg, 'flex')}>
              <Image
                width={407}
                height={520}
                alt='power'
                src={
                  isMatches && isDarkMode
                    ? feature2
                    : !isMatches && isDarkMode
                      ? feature2
                      : feature2Light
                }
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                'max-xl:container-auto flex max-xl:flex-wrap'
              )}
            >
              {PlatformFeatures[1].features
                .filter((x, i) => i !== 1)
                .map((x, i) => (
                  <Link key={i} target='_blank' href={x.link}>
                    {' '}
                    <div
                      className={cn(
                        isMatches && isDarkMode
                          ? styles.featureItem
                          : !isMatches && isDarkMode
                            ? styles.featureItem
                            : styles.featureItemLight,
                        'flex flex-col'
                      )}
                    >
                      <div
                        className={cn(styles.featureItemTitle, 'fonts flex')}
                      >
                        {x.title}
                      </div>
                      <div
                        className={cn(
                          styles.featureItemText,
                          'fonts flex text-base opacity-70'
                        )}
                      >
                        {x.text}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div
            className={cn(
              styles.feature4,
              'flex items-center gap-x-40  gap-y-40  max-xl:flex-wrap'
            )}
          >
            <div className={cn(styles.featureImg, 'flex')}>
              <Image
                width={407}
                height={520}
                alt='power'
                src={
                  isMatches && isDarkMode
                    ? feature3
                    : !isMatches && isDarkMode
                      ? feature3
                      : feature3Light
                }
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                'max-xl:container-auto flex  gap-x-40 gap-y-40 max-xl:flex-wrap'
              )}
            >
              <div
                className={cn(
                  isMatches && isDarkMode
                    ? styles.featureId
                    : !isMatches && isDarkMode
                      ? styles.featureId
                      : styles.featureIdLight,
                  'fonts flex'
                )}
              >
                {PlatformFeatures[2].id}
              </div>
              {PlatformFeatures[2].features.map((x, i) => (
                <Link key={i} target='_blank' href={x.link}>
                  <div
                    className={cn(
                      isMatches && isDarkMode
                        ? styles.featureItem
                        : !isMatches && isDarkMode
                          ? styles.featureItem
                          : styles.featureItemLight,
                      'flex flex-col'
                    )}
                  >
                    <div className={cn(styles.featureItemTitle, 'fonts flex')}>
                      {x.title}
                    </div>
                    <div
                      className={cn(
                        styles.featureItemText,
                        'fonts flex text-base opacity-70'
                      )}
                    >
                      {x.text}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          className={cn(
            isMatches && isDarkMode
              ? styles.featureGet
              : !isMatches && isDarkMode
                ? styles.featureGet
                : styles.featureGetLigth,
            'max-xl:container-auto max-xl:padding-y max-md:padding-global max-sm:sm-padding-top-0 mx-auto flex justify-between max-xl:flex-wrap'
          )}
        >
          <div className={cn('flex flex-col')}>
            <div
              className={cn(styles.howTitle, styles.getTitle, 'flex flex-col')}
            >
              {getStartedMessage.title}
            </div>
            <div
              className={cn(
                styles.getSubtitle,
                'fonts flex flex-col text-base opacity-70 '
              )}
            >
              {getStartedMessage.content}
            </div>
          </div>
          {getStartedLinks.map((x, i) => (
            <LinkBlock
              isMatches={isMatches}
              isDarkMode={isDarkMode}
              key={i}
              content={x}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Home;
