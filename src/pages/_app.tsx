import type { AppProps } from 'next/app';
import { FC } from 'react';
import { ThemeProvider } from 'next-themes';

import '@/assets/styles/globals.css';

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <Component {...rest} />
    </ThemeProvider>
  );
};

export default MyApp;
