import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Discover Our Products – mettā muse",
    "description": "Shop 3425+ curated products from independent artisans worldwide.",
    "url": "https://your-site.netlify.app"
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Discover 3425+ curated products from independent artisans. Shop clothing, accessories and more at mettā muse." />
        <meta property="og:title" content="Discover Our Products – mettā muse" />
        <meta property="og:description" content="Shop curated artisan products worldwide." />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}