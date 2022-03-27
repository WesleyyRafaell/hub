import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SessionProvider } from 'next-auth/react'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { AuthProvider } from 'contexts/authContext'

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <AuthProvider>
          <Head>
            <title>Hub</title>
            <link rel="shortcut icon" href="/img/icon-512.png" />
            <link rel="apple-touch-icon" href="/img/icon-512.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#06092B" />
            <meta
              name="description"
              content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </AuthProvider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default App
