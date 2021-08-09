import Head from 'next/head'
import { VFC } from 'react'

interface Props {
  title: string
}

const AppHead: VFC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='アプリの説明' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default AppHead
