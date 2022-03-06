import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo-client';
import { Layout } from '@/components/Layout/Layout';
import { PageWrapper } from '@/components/PageWrapper';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <ApolloProvider client={client}>
      <PageWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PageWrapper>
    </ApolloProvider>
  </>
);

export default MyApp;
