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
} from '@/constants/constantsText';
import { LinkBlock } from '@/components/LinkBlock';
import { ThemeImage } from '@/components/ThemeImage';
import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';
import cn from 'classnames';
import Image from 'next/image';

function Home() {
  return (
    <Layout
      title='Mutable Web is a customization layer built on top of the existing web'
      description={
        'Dapplets and the Mutable Web enable communities to create a custom version(Mutation) of an existing website by enhancing it with add-on applications. Dapplets run in the user s browser and allowing them to take control of UX/UI on any website'
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleBlock}>
            <div className={styles.titleBlockTitle}>
              The Home <br />
              of Mutable Web
            </div>
            <div className={styles.titleBlockSubtitle}>
              {HomeTitle.subtitle}
            </div>
          </div>
          <div className={styles.titleButtons}>
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
          <div className={styles.supportedLableBlock}>
            <div className={styles.supportedLable}>Supported by:</div>
            <div className={styles.supportedBlock}>
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={168}
                height={63}
                alt='NEAR Foundation'
                src='icons/home/near-foundation.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={163}
                height={63}
                alt='Proximity Labs'
                src='icons/home/proximity-labs.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={167}
                height={63}
                alt='Ethereum Swarm'
                src='icons/home/swarm.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://build.boshacks.com/bos-hacks/winners#dapplets-or-general-prize-1st-place-or-usd2500-usdc-or-aspiro.near-alsakhaev.near'
              >
                <ThemeImage
                  className={styles.supportedBlockIcon}
                  width={233}
                  height={55}
                  alt='BOS HACKS Hackathon'
                  src='icons/home/bos-hacks.svg'
                  style={{ transform: 'none', cursor: 'pointer' }}
                />
              </Link>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://devfolio.co/projects/dapplets-72b4'
              >
                <ThemeImage
                  className={styles.supportedBlockIcon}
                  width={223}
                  height={63}
                  alt='Web3Hackfest'
                  src='icons/home/web3hackfest.svg'
                  style={{ transform: 'none', cursor: 'pointer' }}
                />
              </Link>
              <Link
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.blog.encode.club/encode-x-near-horizon-hackathon-powered-by-near-devhub-prizewinners-and-summary-bc5430af5851#:~:text=Community%20Tools'
              >
                <ThemeImage
                  className={styles.supportedBlockIcon}
                  width={119}
                  height={63}
                  alt='Encode x NEAR Horizon Hackathon'
                  src='icons/home/encode-near-horizon.svg'
                  style={{ transform: 'none', cursor: 'pointer' }}
                />
              </Link>
            </div>
            <div className={styles.supportedBlockMobile}>
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={39}
                height={39}
                alt='NEAR Foundation'
                src='icons/home/mobile/home/near.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={39}
                height={43}
                alt='Proximity Labs'
                src='icons/home/mobile/home/proxy.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={44}
                height={44}
                alt='Ethereum Swarm'
                src='icons/home/mobile/home/swarm.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={28}
                height={39}
                alt='BOS HACKS Hackathon'
                src='icons/home/mobile/home/boss.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={styles.supportedBlockIcon}
                width={36}
                height={43}
                alt='Web3Hackfest'
                src='icons/home/mobile/home/web3hack.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
          </div>
        </div>
        <div className={styles.howWrapper}>
          <div className={styles.howHeader}>
            <div className={styles.howTitle}>{HowItWorks.title}</div>
            <div className={styles.howSubitle}>{HowItWorks.subtitle}</div>
          </div>

          <div className={styles.howImg}>
            <div className={styles.howTablet}>
              <ThemeImage
                className={styles.howTabletImage}
                width={425}
                height={354}
                alt='How it works?'
                src='icons/home/tablet/home/how-tab.svg'
                style={{ transform: 'none', cursor: 'default' }}
                priority
              />
              <div className={styles.howItemWrapper}>
                {HowItWorksItems.map((x, i) => (
                  <div className={styles.howItem} key={i}>
                    <div
                      className={cn(styles.howItemTitle, {
                        [styles.howItemTitleColor]: i == 1,
                      })}
                    >
                      {x.title}
                    </div>
                    <div className={styles.howItemText}>{x.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <ThemeImage
              className={styles.howImgDesk}
              width={1300}
              height={511}
              alt='How it works?'
              src='icons/home/big-how.svg'
              style={{ transform: 'none', cursor: 'default' }}
              priority
            />
          </div>
        </div>
        <div className={styles.exampleWrapper}>
          <div className={styles.exampleTitle}>
            mutations{' '}
            <span className={styles.exampleTitleColor}>&nbsp;example</span>
          </div>
          <div className={styles.powerItemsContainer}>
            {PowerDapplets.map((dapplet, i) => (
              <div className={styles.powerItem} key={i}>
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
            ))}
          </div>
        </div>
        <div className={styles.featureWrapper}>
          <div className={styles.feature1}>
            <div className={styles.exampleTitle}>
              platform
              <span className={styles.exampleTitleColor}>&nbsp;features</span>
            </div>
            <Link
              prefetch={false}
              target='_blank'
              href='https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj'
              className={styles.feature1Link}
            >
              <div className={styles.featureTextBlock}>
                <div className={styles.featureText}>
                  {PlatformFeaturesMessage}
                </div>
                <Image
                  className={styles.featureLink}
                  width={50}
                  height={50}
                  alt='arrow'
                  src='icons/link/arrow.svg'
                />
              </div>
            </Link>
          </div>
          <div className={styles.feature2}>
            <div className={styles.featureImg}>
              <ThemeImage
                width={395}
                height={275}
                alt='feature'
                src='icons/home/feature-1.svg'
                className={styles.featureImage}
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div className={styles.featureItemsBlock}>
              <div className={styles.featureId}>{PlatformFeatures[0].id}</div>
              {PlatformFeatures[0].features.map((x, i) => (
                <Link prefetch={false} key={i} target='_blank' href={x.link}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureItemTitle}>{x.title}</div>
                    <div className={styles.featureItemText}>{x.text}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.feature3}>
            <div className={styles.featureItemsBlock}>
              <div className={styles.featureId}>{PlatformFeatures[1].id}</div>
              <Link
                prefetch={false}
                target='_blank'
                href={PlatformFeatures[1].features[0].link}
              >
                <div className={styles.featureItem}>
                  <div className={styles.featureItemTitle}>
                    {PlatformFeatures[1].features[0].title}
                  </div>
                  <div className={styles.featureItemText}>
                    {PlatformFeatures[1].features[0].text}
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.featureImg}>
              <ThemeImage
                width={395}
                height={275}
                alt='feature'
                src='icons/home/feature-2.svg'
                className={styles.featureImage}
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div className={styles.featureItemsBlock}>
              {PlatformFeatures[1].features
                .filter((x, i) => i !== 0)
                .map((x, i) => (
                  <Link prefetch={false} key={i} target='_blank' href={x.link}>
                    <div className={styles.featureItem}>
                      <div className={styles.featureItemTitle}>{x.title}</div>
                      <div className={styles.featureItemText}>{x.text}</div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className={styles.feature4}>
            <div className={styles.featureImg}>
              <ThemeImage
                width={395}
                height={275}
                alt='feature'
                src='icons/home/feature-3.svg'
                className={styles.featureImage}
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div className={styles.featureItemsBlock}>
              <div className={styles.featureId}>{PlatformFeatures[2].id}</div>
              {PlatformFeatures[2].features.map((x, i) => (
                <Link prefetch={false} key={i} target='_blank' href={x.link}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureItemTitle}>{x.title}</div>
                    <div className={styles.featureItemText}>{x.text}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.featureGet}>
          <div className={styles.getStartedText}>
            <div className={styles.getTitle}>{getStartedMessage.title}</div>
            <div className={styles.getSubtitle}>
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
