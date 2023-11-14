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
      <div className='fonts container-xl max-xl:container-lg mx-auto flex flex-col max-xl:gap-y-40 '>
        <div
          className={cn(
            styles.titleWrapper,
            'max-md:padding-global max-xl:no-bg flex flex-col'
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
              icon='icons/button/download.svg'
            />
            <Button
              text='Visit Github'
              isOutline
              icon='icons/button/github.svg'
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
                'max-lg:padding-global-x-mobile flex items-center justify-between opacity-70  max-xl:flex-wrap max-xl:justify-around max-sm:flex-col max-sm:gap-y-40'
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
                width={168}
                height={63}
                alt='Proximity Labs'
                src='icons/home/proximity-labs.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={168}
                height={63}
                alt='Ethereum Swarm'
                src='icons/home/swarm.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={168}
                height={63}
                alt='BOS HACKS Hackathon'
                src='icons/home/bos-hacks.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={168}
                height={63}
                alt='Web3Hackfest'
                src='icons/home/web3hackfest.svg'
                style={{ transform: 'none', cursor: 'default' }}
              />
              <ThemeImage
                className={cn(styles.supportedBlockIcon, 'noTransition')}
                width={168}
                height={63}
                alt='Encode x NEAR Horizon Hackathon'
                src='icons/home/encode-near-horizon.svg'
                style={{ transform: 'none', cursor: 'default' }}
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

            <ThemeImage
              className={cn('noTransition', 'max-xl:container-100')}
              width={1300}
              height={511}
              alt='How it works?'
              src='icons/home/big-how.svg'
              style={{ transform: 'none', cursor: 'default' }}
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
            {PowerDapplets.map((dapplet, i) => (
              <div
                className={cn(
                  styles.powerItem,
                  'max-md:container-100 flex flex-col'
                )}
                key={i}
              >
                <div className={cn(styles.powerImg, '')}>
                  <ThemeImage
                    className={cn('noTransition', 'max-md:global-w-80')}
                    width={407}
                    height={407}
                    alt='power'
                    src={dapplet.image}
                    style={{ transform: 'none', cursor: 'default' }}
                  />
                </div>
                <div className={cn(styles.powerTitle, 'fonts')}>
                  {dapplet.title}
                </div>
                <div
                  className={cn(styles.powerText, 'fonts text-base opacity-70')}
                >
                  {dapplet.text}
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
              'max-md:width-100-mobile max-sm:sm-global-w flex items-center max-md:flex-wrap'
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
                <Image
                  width={50}
                  height={50}
                  alt='power'
                  src='icons/link/arrow.svg'
                />
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
              <ThemeImage
                width={407}
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
                'max-xl:container-auto flex gap-x-40 gap-y-40 max-xl:flex-wrap'
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
              'flex items-center gap-x-40  gap-y-40  max-xl:flex-wrap'
            )}
          >
            <div
              className={cn(
                styles.featureItemsBlock,
                'max-xl:container-auto flex gap-y-40 max-xl:flex-wrap'
              )}
            >
              <div className={cn(styles.featureId, 'fonts flex')}>
                {PlatformFeatures[1].id}
              </div>
              <Link target='_blank' href={PlatformFeatures[1].features[0].link}>
                <div className={cn(styles.featureItem, 'flex flex-col')}>
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
                src='icons/home/feature-2.svg'
                className={'noTransition'}
                style={{ transform: 'none', cursor: 'default' }}
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
              'flex items-center gap-x-40  gap-y-40  max-xl:flex-wrap'
            )}
          >
            <div className={cn(styles.featureImg, 'flex')}>
              <ThemeImage
                width={407}
                height={520}
                alt='power'
                src='icons/home/feature-3.svg'
                className={'noTransition'}
                style={{ transform: 'none', cursor: 'default' }}
              />
            </div>
            <div
              className={cn(
                styles.featureItemsBlock,
                'max-xl:container-auto flex  gap-x-40 gap-y-40 max-xl:flex-wrap'
              )}
            >
              <div className={cn(styles.featureId, 'fonts flex')}>
                {PlatformFeatures[2].id}
              </div>
              {PlatformFeatures[2].features.map((x, i) => (
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
        </div>
        <div
          className={cn(
            styles.featureGet,
            'max-xl:container-auto max-xl:padding-y max-md:padding-global max-sm:sm-padding-top-0 mx-auto flex justify-between max-xl:flex-wrap max-xl:gap-y-40'
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
            <LinkBlock key={i} content={x} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Home;
