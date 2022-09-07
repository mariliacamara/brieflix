import Head from 'next/head'
import Main from '@/layouts/main'

const Home = () => {
  return (
    <Main>
      <Head>
        <title>Brieflix</title>
      </Head>
      <h2 className="text-3xl text-white">Em destaque</h2>
      <h2 className="text-3xl text-white">Em cartaz</h2>
      <h2 className="text-3xl text-white">Filmes</h2>
      <h2 className="text-3xl text-white">Séries</h2>
    </Main>
  )
}

export default Home
