"use client";
import Link from "next/link";
import styles from "./Home.module.scss";
import {
  HomeTitle,
  HowItWorks,
  HowItWorksItems,
  PlatformFeatures,
  PlatformFeaturesMessage,
  PowerDapplets,
  getStartedLinks,
  getStartedMessage,
} from "@/constants/constantsText";
import { LinkBlock } from "@/components/LinkBlock";
import near from "@/assets/icon/home/near-dark.svg";
import proxy from "@/assets/icon/home/proxy-dark.svg";
import swarm from "@/assets/icon/home/swarm-dark.svg";
import boss from "@/assets/icon/home/boss-dark.svg";
import hack from "@/assets/icon/home/hack-dark.svg";
import encode from "@/assets/icon/home/encode-dark.svg";
import download from "@/assets/icon/button/download_dark.svg";
import github from "@/assets/icon/button/github_dark.svg";
import Image from "next/image";
import how from "@/assets/icon/home/big-how-dark.svg";
import feature1 from "@/assets/icon/home/feature-1-dark.svg";
import feature2 from "@/assets/icon/home/feature-2-dark.svg";
import feature3 from "@/assets/icon/home/feature-3-dark.svg";
import arrow from "@/assets/icon/link/arrow-dark.svg";
import { Button } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import cn from "classnames";
import { useEffect, useState } from "react";
export interface HomeProps {
  isDarkMode: boolean;
}
function Home({}: NextPage) {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {}, [isDarkMode]);
  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  }
  return (
    <Layout darkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="flex flex-col fonts container-xl mx-auto ">
        <div className={cn(styles.titleWrapper, "flex flex-col")}>
          <div
            className={cn(
              styles.titleBlock,
              "flex flex-col  mx-auto items-center fonts"
            )}
          >
            <div className={cn(styles.titleBlockTitle, "fonts flex")}>
              {HomeTitle.title}
            </div>
            <div
              className={cn(
                styles.titleBlockSubtitle,
                "fonts opacity-70 flex text-base"
              )}
            >
              {HomeTitle.subtitle}
            </div>
          </div>
          <div
            className={cn(styles.titleButtons, "flex justify-between mx-auto")}
          >
            <Button text="Get started" isPrimary icon={download} />
            <Button
              text="Visit Github"
              isOutline
              icon={github}
              link="https://github.com/dapplets"
            />
          </div>
          <div className="flex flex-col">
            <div
              className={cn(
                styles.supportedLable,
                "opacity-70 flex text-base fonts"
              )}
            >
              Supported by:
            </div>
            <div
              className={cn(
                styles.supportedBlock,
                "opacity-70 items-center flex justify-between"
              )}
            >
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt="near"
                src={near}
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt="proxy"
                src={proxy}
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt="swarm"
                src={swarm}
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt="boss"
                src={boss}
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt="hack"
                src={hack}
              />
              <Image
                className={cn(styles.supportedBlockIcon)}
                width={168}
                height={63}
                alt="encode"
                src={encode}
              />
            </div>
          </div>
        </div>
        <div className={cn(styles.howWrapper, "flex flex-col")}>
          <div className="flex flex-col mx-auto fonts justify-center">
            <div className={cn(styles.howTitle, "flex justify-center fonts")}>
              {HowItWorks.title}
            </div>
            <div
              className={cn(
                styles.howSubitle,
                "text-base opacity-70 flex justify-center text-center fonts"
              )}
            >
              {HowItWorks.subtitle}
            </div>
          </div>
          {/* todo: remove whem will animation */}
          <div className="flex">
            {/* <div>
            {HowItWorksItems.map((x, i) => (
              <div className="flex flex-col" key={i}>
                <div>{x.title}</div>
                <div>{x.text}</div>
              </div>
            ))}
          </div> */}

            <Image width={1300} height={511} alt="how" src={how} />
          </div>
          {/* <div>points</div> */}
        </div>
        <div className={cn(styles.exampleWrapper, "flex flex-col mx-auto")}>
          <div className={cn(styles.exampleTitle, "flex fonts")}>
            Dapplets{" "}
            <div className={cn(styles.exampleTitleColor, "flex fonts")}>
              &nbsp;example
            </div>
          </div>
          <div className="flex justify-between">
            {PowerDapplets.map((x, i) => (
              <div className={cn(styles.powerItem, "flex flex-col")} key={i}>
                <div className={cn(styles.powerImg, "")}>
                  <Image width={407} height={407} alt="power" src={x.icon} />
                </div>
                <div className={cn(styles.powerTitle, "fonts")}>{x.title}</div>
                <div
                  className={cn(styles.powerText, "opacity-70 fonts text-base")}
                >
                  {x.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cn(styles.featureWrapper, "flex flex-col mx-auto")}>
          <div className={cn(styles.feature1, "flex items-center")}>
            <div className={cn(styles.exampleTitle, "items-center flex fonts")}>
              platform
              <div className={cn(styles.exampleTitleColor, "flex fonts")}>
                &nbsp;features
              </div>
            </div>
            <div
              className={cn(
                styles.featureTextBlock,
                "flex items-center justify-between  fonts"
              )}
            >
              <div className={cn(styles.featureText, "opacity-70")}>
                {PlatformFeaturesMessage}
              </div>
              <Link
                className={cn(styles.featureLink, "")}
                target="_blank"
                href="https://chrome.google.com/webstore/detail/dapplets/pjjnaojpjhgbhpfffnjleidmdbajagdj"
              >
                <Image width={50} height={50} alt="power" src={arrow} />
              </Link>
            </div>
          </div>
          <div className={cn(styles.feature2, "flex items-center gap-x-40")}>
            <div className={cn(styles.featureImg, "flex")}>
              <Image width={407} height={520} alt="power" src={feature1} />
            </div>
            <div className={cn(styles.featureItemsBlock, "flex")}>
              <div className={cn(styles.featureId, "flex fonts")}>
                {PlatformFeatures[0].id}
              </div>
              {PlatformFeatures[0].features.map((x, i) => (
                <div
                  className={cn(styles.featureItem, "flex flex-col")}
                  key={i}
                >
                  <div className={cn(styles.featureItemTitle, "flex fonts")}>
                    {x.title}
                  </div>
                  <div className={cn(styles.featureItemText, "flex opacity-70 text-base fonts")}>
                    {x.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={cn(styles.feature3, "flex items-center gap-x-20")}>
            <div className={cn(styles.featureItemsBlock, "flex")}>
              <div className={cn(styles.featureId, "flex fonts")}>
                {PlatformFeatures[1].id}
              </div>
              <div className={cn(styles.featureItem, "flex flex-col")}>
                <div className={cn(styles.featureItemTitle, "flex fonts")}>
                  {PlatformFeatures[1].features[0].title}
                </div>
                <div className={cn(styles.featureItemText, "flex opacity-70 text-base fonts")}>
                  {PlatformFeatures[1].features[0].text}
                </div>
              </div>
            </div>
            <div className={cn(styles.featureImg, "flex")}>
              <Image width={407} height={520} alt="power" src={feature2} />
            </div>
            <div className={cn(styles.featureItemsBlock, "flex")}>
              {PlatformFeatures[1].features
                .filter((x, i) => i !== 1)
                .map((x, i) => (
                  <div
                    className={cn(styles.featureItem, "flex flex-col")}
                    key={i}
                  >
                    <div className={cn(styles.featureItemTitle, "flex fonts")}>
                      {x.title}
                    </div>
                    <div className={cn(styles.featureItemText, "flex opacity-70 text-base fonts")}>
                      {x.text}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className={cn(styles.feature4, "flex items-center gap-x-40")}>
            <div className={cn(styles.featureImg, "flex")}>
              <Image width={407} height={520} alt="power" src={feature3} />
            </div>
            <div className={cn(styles.featureItemsBlock, "flex")}>
              <div className={cn(styles.featureId, "flex fonts")}>
                {PlatformFeatures[2].id}
              </div>
              {PlatformFeatures[2].features.map((x, i) => (
                <div
                  className={cn(styles.featureItem, "flex flex-col")}
                  key={i}
                >
                  <div className={cn(styles.featureItemTitle, "flex fonts")}>
                    {x.title}
                  </div>
                  <div className={cn(styles.featureItemText, "flex opacity-70 text-base fonts")}>
                    {x.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={cn(styles.featureGet, "flex mx-auto justify-between")}>
          <div className={cn( "flex flex-col")}>
            <div  className={cn(styles.howTitle, styles.getTitle, "flex flex-col")}>{getStartedMessage.title}</div>
            <div className={cn(styles.getSubtitle,"flex fonts text-base flex-col opacity-70")}>{getStartedMessage.content}</div>
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
