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
    <Layout>
      <div className='fonts container-xl max-xl:container-lg mx-auto flex flex-col max-lg:container-mob '>
        <div className={cn(styles.titleWrapper, ' flex flex-col')}>
          <div
            className={cn(
              styles.titleBlock,
              'fonts mx-auto  flex flex-col items-center'
            )}
          >
            <div className={cn(styles.titleBlockTitle, 'fonts   flex')}>
              The Home <br />
              of Augmented Web
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
            className={cn(
              styles.titleButtons,
              'mx-auto flex justify-between max-xl:justify-center '
            )}
          >
            <Button
              classNames='max-xl:hidden'
              link='https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj'
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
          <div
            className={cn(
              styles.supportedLableBlock,
              'max-xl:max-w-mwLg flex flex-col max-xl:ml-auto max-xl:mr-auto max-xl:flex-auto  max-lg:w-80 '
            )}
          >
            <div
              className={cn(
                styles.supportedLable,
                'fonts ml-20 flex text-base opacity-70 max-lg:ml-0'
              )}
            >
              Supported by:
            </div>
            <div
              className={cn(
                styles.supportedBlock,
                ' flex items-center justify-between gap-y-32 opacity-70 max-xl:flex-wrap max-lg:hidden  '
              )}
            >
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={168}
                height={63}
                alt='NEAR Foundation'
                src='icons/home/near-foundation.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={163}
                height={63}
                alt='Proximity Labs'
                src='icons/home/proximity-labs.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={167}
                height={63}
                alt='Ethereum Swarm'
                src='icons/home/swarm.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={233}
                height={55}
                alt='BOS HACKS Hackathon'
                src='icons/home/bos-hacks.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={223}
                height={63}
                alt='Web3Hackfest'
                src='icons/home/web3hackfest.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={119}
                height={63}
                alt='Encode x NEAR Horizon Hackathon'
                src='icons/home/encode-near-horizon.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div
              className={cn(
                styles.supportedBlock,
                ' flex items-center justify-between gap-y-32 opacity-70 max-xl:flex-wrap lg:hidden  '
              )}
            >
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={39}
                height={39}
                alt='NEAR Foundation'
                src='icons/home/mobile/home/near.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={39}
                height={43}
                alt='Proximity Labs'
                src='icons/home/mobile/home/proxy.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={44}
                height={44}
                alt='Ethereum Swarm'
                src='icons/home/mobile/home/swarm.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={28}
                height={39}
                alt='BOS HACKS Hackathon'
                src='icons/home/mobile/home/boss.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={36}
                height={43}
                alt='Web3Hackfest'
                src='icons/home/mobile/home/web3hack.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
             
            </div>
          </div>
        </div>
        <div className={cn(styles.howWrapper, ' flex flex-col')}>
          <div className='fonts mx-auto flex flex-col justify-center  max-lg:max-w-mw80'>
            <div className={cn(styles.howTitle, 'fonts flex justify-center')}>
              {HowItWorks.title}
            </div>
            <div
              className={cn(
                styles.howSubitle,
                'fonts flex justify-center text-center text-base opacity-70 '
              )}
            >
              {HowItWorks.subtitle}
            </div>
          </div>
          {/* todo: remove whem will animation */}
          <div className={cn(styles.howImg, 'flex')}>
            {/* todo: unimported image */}
            <div
              className={cn(
                styles.howTablet,
                'max-xl:flex max-xl:flex-col xl:hidden'
              )}
            >
              <ThemeImage
                className={cn('noTransition , max-xl: mx-auto')}
                width={570}
                height={346}
                alt='How it works?'
                src='icons/home/tablet/home/how-big.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <div className={cn(styles.howItemWrapper)}>
                {/* todo: tablet */}
                {HowItWorksItems.map((x, i) => (
                  <div className={cn(styles.howItem, 'flex flex-col pt-40 pb-20 max-lg:pt-20')} key={i}>
                    <div className={cn(styles.howItemTitle, 'flex')}>
                      {x.title}
                    </div>
                    <div className={cn(styles.howItemText, 'flex')}>
                      {x.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ThemeImage
              className={cn('noTransition', 'max-xl:hidden')}
              width={1300}
              height={511}
              alt='How it works?'
              src='icons/home/big-how.svg'
              style={{ transform: 'none', cursor: 'default' }}
            />
          </div>
          {/* <div>points</div> */}
        </div>
        <div className={cn(styles.exampleWrapper, ' mx-auto flex flex-col')}>
          <div className={cn(styles.exampleTitle, 'fonts flex')}>
            Dapplets{' '}
            <div className={cn(styles.exampleTitleColor, 'fonts flex')}>
              &nbsp;example
            </div>
          </div>
          <div className='flex justify-between max-xl:flex-col max-xl:gap-y-40 max-lg:gap-y-0'>
            {PowerDapplets.map((dapplet, i) => (
              <div className={cn(styles.powerItem, ' flex flex-col max-xl:flex-row max-xl:gap-x-40 max-lg:flex-col')} key={i}>
                <div className={cn(styles.powerImg, '')}>
                  <ThemeImage
                    className={cn('noTransition', '')}
                    width={400}
                    height={400}
                    alt='power'
                    src={dapplet.image}
                    style={{ transform: 'none', cursor: 'default' }}
                  />
                </div>
                <div className={cn(styles.powerTitle, 'fonts max-xl:hidden')}>
                  {dapplet.title}
                </div>
                <div
                  className={cn(
                    styles.powerText,
                    'fonts text-base opacity-70 max-xl:hidden'
                  )}
                >
                  {dapplet.text}
                </div>
                <div className={cn(styles.powerTextBlockTablet, 'fonts xl:hidden')}>
                  <div className={cn(styles.powerTitle, 'fonts')}>
                    {dapplet.title}
                  </div>
                  <div
                    className={cn(
                      styles.powerText,
                      'fonts text-base opacity-70'
                    )}
                  >
                    {dapplet.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cn(styles.featureWrapper, ' mx-auto flex flex-col')}>
          <div className={cn(styles.feature1, ' flex items-center max-xl:flex-col max-xl:items-start max-xl:gap-y-40 max-lg:gap-y-0 ')}>
            <div className={cn(styles.exampleTitle, 'fonts flex items-center')}>
              platform
              <div className={cn(styles.exampleTitleColor, 'fonts flex')}>
                &nbsp;features
              </div>
            </div>
            <Link
              target='_blank'
              href='https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj'
              className={cn(styles.feature1Link,'flex')}
            >
              <div
                className={cn(
                  styles.featureTextBlock,
                  'fonts  flex  items-center justify-between'
                )}
              >
                <div className={cn(styles.featureText, 'opacity-70  ')}>
                  {PlatformFeaturesMessage}
                </div>

                <Image
                  className={cn(styles.featureLink, '')}
                  width={50}
                  height={50}
                  alt='power'
                  src='icons/link/arrow.svg'
                />
              </div>{' '}
            </Link>
          </div>
          <div
            className={cn(
              styles.feature2,
              ' flex items-center gap-x-40 gap-y-40 max-xl:flex-col'
            )}
          >
            <div className={cn(styles.featureImg, 'flex ')}>
              <ThemeImage
                width={405}
                height={520}
                alt='power'
                src='icons/home/feature-1.svg'
                className={'noTransition'}
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                ' flex gap-x-40 gap-y-40 max-xl:justify-center max-xl:gap-y-20 max-xl:gap-x-40tab  max-lg:flex-col'
              )}
            >
              <div className={cn(styles.featureId, 'fonts flex')}>
                {PlatformFeatures[0].id}
              </div>

              {PlatformFeatures[0].features.map((x, i) => (
                <Link key={i} target='_blank' href={x.link}>
                  <div className={cn(styles.featureItem, 'flex flex-col')}>
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
              'flex items-center gap-x-40  gap-y-40 max-xl:flex-col max-xl:gap-y-40tab max-xl:gap-x-40tab max-lg:gap-y-20'
            )}
          >
            <div className={cn(styles.featureItemsBlock, ' flex gap-y-40 max-xl:justify-center  max-xl:gap-x-40tab max-lg:flex-col max-lg:gap-y-20 ')}>
              <div className={cn(styles.featureId, 'fonts flex')}>
                {PlatformFeatures[1].id}
              </div>
              <Link target='_blank' href={PlatformFeatures[1].features[0].link}>
                <div className={cn(styles.featureItem, 'flex flex-col ')}>
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
            <div className={cn(styles.featureImg, 'flex max-xl:justify-center')}>
              <ThemeImage
                width={395}
                height={275}
                alt='power'
                src='icons/home/feature-2.svg'
                className={'noTransition'}
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                ' flex gap-x-40 gap-y-40 max-xl:justify-center max-xl:gap-y-40tab max-xl:gap-x-40tab max-lg:flex-col max-lg:gap-y-10'
              )}
            >
              {PlatformFeatures[1].features
                .filter((x, i) => i !== 0)
                .map((x, i) => (
                  <Link key={i} target='_blank' href={x.link}>
                    {' '}
                    <div className={cn(styles.featureItem, 'flex flex-col')}>
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
              'flex items-center gap-x-40  gap-y-40  max-xl:flex-col max-xl:gap-y-40tab max-xl:gap-x-40tab'
            )}
          >
            <div className={cn(styles.featureImg, 'flex max-xl:justify-center')}>
              <ThemeImage
                width={395}
                height={275}
                alt='power'
                src='icons/home/feature-3.svg'
                className={'noTransition'}
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                ' flex  gap-x-40 gap-y-40 max-xl:justify-center max-xl:gap-y-20 max-xl:gap-x-40tab max-lg:flex-col max-lg:gap-y-10 '
              )}
            >
              <div className={cn(styles.featureId, 'fonts flex')}>
                {PlatformFeatures[2].id}
              </div>
              {PlatformFeatures[2].features.map((x, i) => (
                <Link key={i} target='_blank' href={x.link}>
                  <div className={cn(styles.featureItem, 'flex flex-col ')}>
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
          className={cn(styles.featureGet, '  mx-auto flex justify-between max-xl:flex-wrap')}
        >
          <div className={cn('flex flex-col max-xl:w-full max-xl:pb-40 max-lg:pb-25')}>
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
            <LinkBlock key={i} content={x} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Home;
