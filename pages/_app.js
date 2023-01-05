import { Global, ThemeProvider } from '@emotion/react'
import { theme } from 'styles/theme'
import { reset } from 'styles/global.style'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={reset} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
