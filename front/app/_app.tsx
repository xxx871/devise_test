// pages/_app.tsx

import { AppProps } from 'next/app';
import RootLayout from './layout';
import { withAuthServerSideProps } from '@/lib/auth';

const MyApp = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export const getServerSideProps = withAuthServerSideProps("/api/v1/auth/session");

export default MyApp;
