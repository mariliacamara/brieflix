import { Breadcrumb } from '@/components/Breadcrumb'
import Head from 'next/head'
import Main from '@/layouts/main'
import { getProjectsWithSlug, getProject } from '@/lib/api'
import { Television } from 'phosphor-react'
import { StreamingBadges } from '@/components/StreamingBadges'
import { YoutubeVideo } from '@/components/Video'

interface Media {
  video: string
  background: string
}

interface Streamings {
  netflix: string
  hboMax: string
  globoplay: string
  primeVideo: string
  disneyPlus: string
  starPlus: string
  telecine: string
  appleTV: string
  paramount: string
}

interface GeneralInformation {
  releaseYear: string
}

interface Props {
  title: string
  synopsis: string
  character: string
  displayStreaming: boolean
  genre: Array<string>
  general: GeneralInformation
  media: Media
  streamings: Streamings
}

const SingleTVShow = (props: Props) => {
  const {
    title,
    synopsis,
    character,
    displayStreaming,
    genre,
    general,
    media,
    streamings
  } = props

  return (
    <Main>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className="wrapper h-screen"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.7) 100%), url(${media.background})`
        }}
      >
        <div className="h-screen ml-80 pt-6 pr-6 gap-4 flex flex-col lg:flex-row lg:justify-between">
          <div className="max-w-[500px]">
            <header>
              <Breadcrumb
                path="/series"
                projectType="Séries"
                projectName={title}
              />
              <Television className="mt-10 mb-3 text-red-600" size={46} />
              <h1 className="text-4xl font-semibold text-white">{title}</h1>
              {character && (
                <p className="my-2 text-zinc-400 drop-shadow-lg shadow-black">
                  Brie Larson interpreta {character}
                </p>
              )}

              <hr className="custom-hr" />
              <div dangerouslySetInnerHTML={{ __html: synopsis }}></div>
              {genre && (
                <div className="mt-6 flex flex-row gap-3">
                  {genre.map((genre, idx) => {
                    return (
                      <span key={idx} className="text-xl font-semibold">
                        {genre}
                      </span>
                    )
                  })}
                </div>
              )}
              {general.releaseYear && (
                <div className="mt-1 text-lg font-extralight">
                  {general.releaseYear}
                </div>
              )}
              <h2 className="mt-8 mb-2 text-3xl ">Onde assistir:</h2>
              {displayStreaming ? (
                <StreamingBadges streamings={streamings} />
              ) : (
                <div className="text-zinc-500">
                  Não há nenhum serviço de streaming disponível para essa
                  produção.
                </div>
              )}
            </header>
          </div>
          <div className="self-end w-full lg:w-[600px]">
            <YoutubeVideo />
          </div>
        </div>
      </div>
    </Main>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const projectsWithSlug = await getProjectsWithSlug()

  const projects = projectsWithSlug.edges.filter(
    (e: any) => e.node.moviefields.projectType === 'tvshow'
  )

  return {
    paths: projects.map(({ node }) => `/series/${node.slug}`) || [],
    fallback: false
  }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const { movie } = await getProject(params.slug)

  return {
    props: {
      title: movie.title,
      synopsis: movie.moviefields.synopsis,
      character: movie.moviefields.character,
      genre: movie.moviefields.genre,
      media: {
        background: movie.moviefields.backgroundImg?.mediaItemUrl || null,
        video: movie.moviefields.trailer
      },
      displayStreaming: movie.moviefields.displayStreaming,
      streamings: {
        netflix: movie.moviefields.netflix,
        hboMax: movie.moviefields.hboMax,
        globoplay: movie.moviefields.globoplay,
        primeVideo: movie.moviefields.amazonPrime,
        disneyPlus: movie.moviefields.disneyPlus,
        starPlus: movie.moviefields.starPlus,
        telecine: movie.moviefields.telecine,
        appleTv: movie.moviefields.appleTv,
        paramount: movie.moviefields.paramount
      },
      general: {
        releaseYear: movie.moviefields.releaseyear
      }
    }
  }
}

export default SingleTVShow
