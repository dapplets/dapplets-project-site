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
import { ThemeImage } from '@/components/ThemeImage';
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
import cn from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';

function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <Layout>
      <div className='fonts container-xl mx-auto flex flex-col '>
        <div
          className={cn(
            resolvedTheme === 'dark'
              ? styles.titleWrapper
              : styles.titleWrapperLight,
            'flex flex-col'
          )}
        >
          <div
            className={cn(
              styles.titleBlock,
              'fonts mx-auto  flex flex-col items-center'
            )}
          >
            <div className={cn(styles.titleBlockTitle, 'fonts flex')}>
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
                'flex items-center justify-between opacity-70'
              )}
            >
              <ThemeImage
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='near'
                srcDark={near}
                srcLight={nearLight}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='proxy'
                srcDark={proxy}
                srcLight={proxyLight}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='swarm'
                srcDark={swarm}
                srcLight={swarmLight}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='boss'
                srcDark={boss}
                srcLight={bossLight}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='hack'
                srcDark={hack}
                srcLight={hackLight}
              />

              <ThemeImage
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt='encode'
                srcDark={encode}
                srcLight={encodeLight}
              />
            </div>
          </div>
        </div>
        <div className={cn(styles.howWrapper, 'flex flex-col')}>
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

            <ThemeImage
              width={1300}
              height={511}
              alt='how'
              srcDark={how}
              srcLight={howLight}
            />
          </div>
          {/* <div>points</div> */}
        </div>
        <div className={cn(styles.exampleWrapper, 'mx-auto flex flex-col')}>
          <div className={cn(styles.exampleTitle, 'fonts flex')}>
            Dapplets{' '}
            <div className={cn(styles.exampleTitleColor, 'fonts flex')}>
              &nbsp;example
            </div>
          </div>
          <div className='flex justify-between'>
            {PowerDapplets.map((x, i) => (
              <div className={cn(styles.powerItem, 'flex flex-col')} key={i}>
                <div className={cn(styles.powerImg, '')}>
                  <ThemeImage
                    width={407}
                    height={407}
                    alt='power'
                    srcDark={x.icon}
                    srcLight={powerIconLight[i]}
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
        <div className={cn(styles.featureWrapper, 'mx-auto flex flex-col')}>
          <div className={cn(styles.feature1, 'flex items-center')}>
            <div className={cn(styles.exampleTitle, 'fonts flex items-center')}>
              platform
              <div className={cn(styles.exampleTitleColor, 'fonts flex')}>
                &nbsp;features
              </div>
            </div>
            <div
              className={cn(
                styles.featureTextBlock,
                'fonts flex items-center  justify-between'
              )}
            >
              <div className={cn(styles.featureText, 'opacity-70')}>
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
              'flex items-center gap-x-40 gap-y-40'
            )}
          >
            <div className={cn(styles.featureImg, 'flex')}>
              <ThemeImage
                width={407}
                height={520}
                alt='power'
                srcDark={feature1}
                srcLight={feature1Light}
              />
            </div>
            <div
              className={cn(styles.featureItemsBlock, 'flex gap-x-40 gap-y-40')}
            >
              <div
                className={cn(
                  resolvedTheme === 'dark'
                    ? styles.featureId
                    : styles.featureIdLight,
                  'fonts flex'
                )}
              >
                {PlatformFeatures[0].id}
              </div>
              {PlatformFeatures[0].features.map((x, i) => (
                <Link key={i} target='_blank' href={x.link}>
                  <div
                    className={cn(
                      resolvedTheme === 'dark'
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
              'flex items-center gap-x-40  gap-y-40'
            )}
          >
            <div className={cn(styles.featureItemsBlock, 'flex gap-y-40 ')}>
              <div
                className={cn(
                  resolvedTheme === 'dark'
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
                    resolvedTheme === 'dark'
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
              <ThemeImage
                width={407}
                height={520}
                alt='power'
                srcDark={feature2}
                srcLight={feature2Light}
              />
            </div>
            <div className={cn(styles.featureItemsBlock, 'flex')}>
              {PlatformFeatures[1].features
                .filter((x, i) => i !== 1)
                .map((x, i) => (
                  <Link key={i} target='_blank' href={x.link}>
                    {' '}
                    <div
                      className={cn(
                        resolvedTheme === 'dark'
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
              'flex items-center gap-x-40  gap-y-40'
            )}
          >
            <div className={cn(styles.featureImg, 'flex')}>
              <ThemeImage
                width={407}
                height={520}
                alt='power'
                srcDark={feature3}
                srcLight={feature3Light}
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                'flex gap-x-40  gap-y-40'
              )}
            >
              <div
                className={cn(
                  resolvedTheme === 'dark'
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
                      resolvedTheme === 'dark'
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
            resolvedTheme === 'dark'
              ? styles.featureGet
              : styles.featureGetLight,
            'mx-auto flex justify-between'
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
                'fonts flex flex-col text-base opacity-70'
              )}
            >
              {getStartedMessage.content}
            </div>
          </div>
          {getStartedLinks.map((x, i) => (
            <LinkBlock key={i} content={x} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Home;
