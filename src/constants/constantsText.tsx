import power_1 from "../assets/img/home/power-1-dark.png";
import power_2 from "../assets/img/home/power-2-dark.png";
import power_3 from "../assets/img/home/power-3-dark.png";
import power_1Light from "../assets/img/home/power-1.png";
import power_2Light from "../assets/img/home/power-2.png";
import power_3Light from "../assets/img/home/power-3.png";
export const unicode = "\u0027";
export const getStartedMessage = {
  title: "Get started",
  content: `The best dapps may receive grants
      from the platform to support further development.`,
};
export const getStartedLinks = [
  {
    id: "1",
    link: "https://docs.dapplets.org/docs/get-started",
    title: "Run your own dapplet",
    content:
      "Visit the documentation to learn how to create your own dapplet in just a few minutes.",
  },
  {
    id: "2",
    link: "https://t.me/dapplets",
    title: "Book a demo",
    content:
      "Schedule a 1:1 session with an expert from our team to learn more.",
  },
  {
    id: "3",
    link: "https://discord.com/invite/YcxbkcyjMV",
    title: "Join our community",
    content: "of developers on Discord",
  },
];
export const HomeTitle = {
  title: "The Home of Augmented Web",
  subtitle: `Dapplets - open-source platform which empowers developers to create a community-driven internet, giving users and developers the ability to take control of the UX/UI on any existing websites.`,
};

export const HowItWorks = {
  title: "how it works?",
  subtitle:
    "your gateway to embedding Web3 applications seamlessly into any web page, without requiring permission.",
};

export const HowItWorksItems = [
  {
    id: "1",
    title: "Augmentation",
    text: `Dapplets can insert useful widgets, buttons, add new functionality, create absolutely new user experience.
    These dapplets are stored in decentralized repositories and are unstoppable — no one can remove or disable them`,
  },
  {
    id: "2",
    title: "Content-analysys",
    text: `The adapter defines the set of available augmentations and inserts them into the website at predefined places at the dapplet’s request.`,
  },
  {
    id: "3",
    title: "Legacy site",
    text: `The Core determines a context (usually a website URL) and loads adapters for the context. 
  Connectors - allowing to connect web2 site accounts with crypto wallets, any crypto addresses between each other.`,
  },
];

export const PowerDapplets = [
  {
    id: "1",
    icon: power_1,
    title: "Paywall",
    text: `Paywall Dapplet introduces a new feature to Twitter's UX giving any user the ability to sell their content.`,
  },
  {
    id: "2",
    icon: power_2,
    title: "Community Tools",
    text: `Enhance user experience on third-party websites like Twitter and Github by displaying NEAR community badges to increase their visibility among users.`,
  },
  {
    id: "3",
    icon: power_3,
    title: "Swarm Search",
    text: `The set of modules augmenting Google and YouTube search pages with data from OpenSearch-compatible engines.`,
  },
];

export const PlatformFeaturesMessage = `There is no need for developer
to go to the Google Extension Store yourself - the platform is already there`;

export const PlatformFeatures = [
  {
    id: "Integration and Adaptation",
    features: [
      {
        title: "Adapters system",
        text: `Enable developers to еmbed dapplets into existing websites. Use the adapters already available (Twitter, GitHub, Youtube, Google) or make your own.`,
      },
      {
        title: "Live Parsing",
        text: `Parse web pages using configuration JSON files with CSS and XPath queries prepared for different websites. Work with valuable data without worrying about the internals of web pages.`,
      },
      {
        title: "Support for dynamic webpages",
        text: `Handle embedding widgets into dynamically created DOM-elements with Mutation Observer.`,
      },
    ],
  },
  {
    id: "Built-in UI components",
    features: [
      {
        title: "Built-in Widgets",
        text: `Insert UI components into any website.
        The platform automatically loads community-provided CSS styles depending on the webpage context.`,
      },
      {
        title: "Overlay",
        text: `Use overlaid sidebar for displaying complex web pages when the site context is not enough, which includes: function forwarding, shared state,
        and RxJS-based widget state binding.`,
      },
      {
        title: "Themes",
        text: `Widgets can be styled according to the chosen theme supporting consistent embedding even on dark themes.`,
      },
    ],
  },
  {
    id: "Decentralized services",
    features: [
      {
        title: "Registry on smart contracts",
        text: `Get your application and adapters will all metadata needed from a decentralized false-proof registry built on the Ethereum blockchain.`,
      },
      {
        title: "Decentralized repositories",
        text: `Publish your executable code in Ethereum Swarm and IPFS.`,
      },
      {
        title: "Wallets and smart contracts",
        text: `Apply user interfaces for connecting NEAR and Ethereum wallets and creating sessions that are already implemented at the extension level.`,
      },
    ],
  },
];

export const powerIconLight = [power_1Light, power_2Light, power_3Light];
