import 'pages/_global.scss'
import type { AppProps } from 'next/app'

// 全ページ共通の処理
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
