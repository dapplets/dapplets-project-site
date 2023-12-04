import type { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import init from '@socialgouv/matomo-next';

import '@/assets/styles/globals.css';

const { MATOMO_URL, MATOMO_SITE_ID } = process.env;

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  // Initialize Matomo Analytics
  useEffect(() => {
    if (!MATOMO_URL || !MATOMO_SITE_ID) return;
    init({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
    });
  }, []);

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
