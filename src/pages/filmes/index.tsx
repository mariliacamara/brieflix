import { useState } from 'react'
import { type NextPage } from 'next'
import Head from 'next/head'
import Main from '@/layouts/main'
import { getProjects } from '@/lib/api'
import { MovieCard } from '@/components/MovieCard'
import { Popcorn } from 'phosphor-react'

type MovieFields = {
  projectType: string
  releaseyear: string
}

type FeaturedMedia = {
  mediaItemUrl: string
}

interface FeaturedImage {
  node: FeaturedMedia
}

interface MovieNode {
  title: string
  slug: string
  moviefields: MovieFields
  featuredImage: FeaturedImage
}

interface Movie {
  node: MovieNode
}

interface Props {
  edges: Movie[]
}

const Home: NextPage<Props> = ({ edges }) => {
  const [search, setSearch] = useState('')

  const filteredProjects = search.length
    ? edges.filter((edge) =>
        edge.node.title.toLowerCase().includes(search.toLowerCase())
      )
    : edges

  return (
    <Main>
      <Head>
        <title>Brieflix</title>
      </Head>
      <div className="flex flex-row justify-between w-full mb-6">
        <div className="flex flex-row items-center gap-3  text-red-500">
          <Popcorn size={32} />
          <h1 className="text-xl text-zinc-100 font-bold p-0">
            Todos os filmes
          </h1>
        </div>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Pesquise em filmes..."
            className="w-full py-3 pl-12 pr-4 text-gray-500 border border-zinc-800 rounded-md outline-none bg-zinc-900 focus:bg-zinc-700 focus:border-zinc-600 transition ease-in-out delay-150"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-4">
        {filteredProjects.map((movie) => (
          <MovieCard
            key={movie.node.slug}
            title={movie.node.title}
            releaseYear={movie.node.moviefields.releaseyear}
            featuredImage={movie.node.featuredImage.node.mediaItemUrl}
          />
        ))}
      </div>
    </Main>
  )
}

export async function getStaticProps() {
  let { edges } = await getProjects()

  edges = edges
    .filter((e: Movie) => e.node.moviefields.projectType === 'movie')
    .sort((a: Movie, b: Movie) =>
      a.node.moviefields.releaseyear > b.node.moviefields.releaseyear ? -1 : 1
    )

  return {
    props: {
      edges
    }
  }
}

export default Home
