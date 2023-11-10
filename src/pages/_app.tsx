import type { AppProps } from "next/app";
import { FC } from "react";

import "@/assets/styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {


  return <Component {...rest} />;
};

export default MyApp;
