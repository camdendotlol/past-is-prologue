import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../styles/index.styled'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>What's Past is Prologue</title>
        <meta name="description" content="Camden's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>Hello</Header>
    </>
  )
}

export default Home
