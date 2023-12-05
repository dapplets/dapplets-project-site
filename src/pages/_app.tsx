import type { AppProps } from 'next/app';
import { FC, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import init from '@socialgouv/matomo-next';

import '@/assets/styles/globals.css';

const { NEXT_PUBLIC_MATOMO_URL, NEXT_PUBLIC_MATOMO_SITE_ID } = process.env;

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  // Initialize Matomo Analytics
  useEffect(() => {
    if (!NEXT_PUBLIC_MATOMO_URL || !NEXT_PUBLIC_MATOMO_SITE_ID) return;
    init({
      url: NEXT_PUBLIC_MATOMO_URL,
      siteId: NEXT_PUBLIC_MATOMO_SITE_ID,
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
