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
import { Button } from "@/components/Button";
import { Layout } from "@/components/Layout";
import { NextPage } from "next";
import { useEffect, useState } from "react";
export interface HomeProps {
  isDarkMode: boolean;
}
 function Home({  }: NextPage)  {
  const [isDarkMode, setDarkMode]=useState(false)

  useEffect(()=>{},[isDarkMode])
  function toggleDarkMode() {
   
    setDarkMode(!isDarkMode)
    const root = window.document.documentElement;
    root.classList.toggle("dark");
  }
  return (
    <Layout darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} >
    <div className="flex flex-col fonts container-xl mx-auto ">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex">{HomeTitle.title}</div>
          <div className="flex">{HomeTitle.subtitle}</div>
        </div>
        <div className="flex">
          <Button text="Get started" icon={download} />{" "}
          <Button
            text="Visit Github"
            icon={github}
            link="https://github.com/dapplets"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">Supported by:</div>
          <div className="flex">
            <Image width={168} height={63} alt="near" src={near} />
            <Image width={168} height={63} alt="proxy" src={proxy} />
            <Image width={168} height={63} alt="swarm" src={swarm} />
            <Image width={168} height={63} alt="boss" src={boss} />
            <Image width={168} height={63} alt="hack" src={hack} />
            <Image width={168} height={63} alt="encode" src={encode} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div>{HowItWorks.title}</div>
          <div>{HowItWorks.subtitle}</div>
        </div>
        <div className="flex">
          {/* <div>
            {HowItWorksItems.map((x, i) => (
              <div className="flex flex-col" key={i}>
                <div>{x.title}</div>
                <div>{x.text}</div>
              </div>
            ))}
          </div> */}
          <div>
            <Image width={840} height={511} alt="how" src={how} />
          </div>
        </div>
        {/* <div>points</div> */}
      </div>
      <div className="flex flex-col">
        <div>
          Dapplets <div>example</div>
        </div>
        <div className="flex">
          {PowerDapplets.map((x, i) => (
            <div className="flex flex-col" key={i}>
              <div>
                <Image width={407} height={407} alt="power" src={x.icon} />
              </div>
              <div>{x.title}</div>
              <div>{x.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex feature-1">
          <div>
            platform <div>features</div>
          </div>
          <div>{PlatformFeaturesMessage}</div>
        </div>
        <div className="flex feature-2">
          <div className="flex">
            <Image width={407} height={520} alt="power" src={feature1} />
          </div>
          <div className="flex">
            <div className="flex">{PlatformFeatures[0].id}</div>
            {PlatformFeatures[0].features.map((x, i) => (
              <div className="flex flex-col" key={i}>
                <div className="flex">{x.title}</div>
                <div className="flex">{x.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex feature-3">
          <div className="flex flex-col">
            <div>{PlatformFeatures[1].id}</div>
            <div>
              <div>{PlatformFeatures[1].features[0].title}</div>
              <div> {PlatformFeatures[1].features[0].text}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <Image width={407} height={520} alt="power" src={feature2} />
          </div>
          <div className="flex flex-col">
            {PlatformFeatures[1].features
              .filter((x, i) => i !== 1)
              .map((x, i) => (
                <div className="flex flex-col" key={i}>
                  <div>{x.title}</div>
                  <div>{x.text}</div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex feature-4">
          <div className="flex flex-col">
            <Image width={407} height={520} alt="power" src={feature3} />
          </div>
          <div className="flex ">{PlatformFeatures[2].id}</div>
          {PlatformFeatures[2].features.map((x, i) => (
            <div className="flex flex-col" key={i}>
              <div>{x.title}</div>
              <div>{x.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
      
          <div className="flex flex-col">
            <div>{getStartedMessage.title}</div>
            <div>{getStartedMessage.content}</div>
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
