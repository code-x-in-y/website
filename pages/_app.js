// import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    
  const meta = {
    title: "Code X in Y"
  };

  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        /> 
          <title>{meta.title}</title>
        </Head>
      <Component {...pageProps} />
    </>
  )
}
