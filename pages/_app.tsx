import { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global';
import { ShoppingCartProvider } from '@hooks/useShoppingCart';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ShoppingCartProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ShoppingCartProvider>
  )
}

export default MyApp
