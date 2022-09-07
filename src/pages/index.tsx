import Head from 'next/head'
import Main from '@/layouts/main'

const Home = () => {
  return (
    <Main>
      <Head>
        <title>Brieflix</title>
      </Head>
      <h1 className="text-3xl text-white">HELLO WORLD</h1>
    </Main>
  )
}

export default Home
