import { Html, Head, Main, NextScript } from 'next/document';

import { PageHeader } from '@/components/PageHeader';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <NextScript />
        <PageHeader />
        <div className="pt-24">
          <Main />
        </div>
      </body>
    </Html>
  );
}
