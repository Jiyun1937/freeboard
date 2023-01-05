import { Global, ThemeProvider } from '@emotion/react'
import { theme } from 'styles/theme'
import { reset } from 'styles/global.style'
import { Layout } from 'components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
