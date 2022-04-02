import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          {/* <!-- Facebook Meta Tags --> */}
          <meta property="og:url" content="https://wfh-lk.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="workspaces list sri lanka" />
          <meta
            property="og:description"
            content="workspaces currently available in sri lanka"
          />
          <meta
            property="og:image"
            content="https://wfh-lk.vercel.app/shridhar-gupta-unsplash.jpg"
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="wfh-lk.vercel.app" />
          <meta property="twitter:url" content="https://wfh-lk.vercel.app/" />
          <meta name="twitter:title" content="workspaces list sri lanka" />
          <meta
            name="twitter:description"
            content="workspaces currently available in sri lanka"
          />
          <meta
            name="twitter:image"
            content="https://wfh-lk.vercel.app/shridhar-gupta-unsplash.jpg"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
