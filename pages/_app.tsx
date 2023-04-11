import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Styles } from "@chakra-ui/theme-tools"
import GlobalStyle from '../components/globalstyles'

const themeStyled: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  }
}

const colors = {
  primary: '#111',
  secondary: '#0070f3',
}

export const styles: Styles = {
  global: {
    body: {
      bg: '#D9E6F6',
    }
  }
}

const theme = extendTheme({ 
  colors,
  styles
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themeStyled}>
        <ChakraProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </>
  )
}
