import { Breadcrumb } from '@/components/Breadcrumb'
import Main from '@/layouts/main'
import { getProjectsWithSlug, getProject } from '@/lib/api'

interface Media {
  video: string
  background: string
}

interface GeneralInformation {
  releaseYear: string
}

interface Props {
  title: string
  synopsis: string
  character: string
  genre: Array<string>
  general: GeneralInformation
  media: Media
}

const SingleTVShow = (props: Props) => {
  const { title, synopsis, character, genre, general, media } = props

  console.log(genre)
  return (
    <Main>
      <div
        className="wrapper h-screen"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.7) 100%), url(${media.background})`
        }}
      >
        <div className="ml-80 pt-6 pr-6 flex flex-row justify-between">
          <div className="max-w-[500px]">
            <header>
              <Breadcrumb
                path="/series"
                projectType="Séries"
                projectName={title}
              />
              <h1 className="mt-10 text-3xl font-semibold text-white">
                {title}
              </h1>
              {character && (
                <p className="my-2 text-zinc-400 drop-shadow-lg shadow-black">
                  Brie Larson interpreta {character}
                </p>
              )}

              <hr className="custom-hr" />
              <div dangerouslySetInnerHTML={{ __html: synopsis }}></div>
              <div>{general.releaseYear}</div>
              <div className="mt-6">
                {genre &&
                  genre.map((genre) => {
                    return (
                      <span
                        key={genre}
                        className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                      >
                        {genre}
                      </span>
                    )
                  })}
              </div>
            </header>
          </div>
          <div>123</div>
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

  console.log(movie)

  return {
    props: {
      title: movie.title,
      synopsis: movie.moviefields.synopsis,
      character: movie.moviefields.character,
      genre: movie.moviefields.genre,
      media: {
        background: movie.moviefields.backgroundImg?.mediaItemUrl,
        video: movie.moviefields.trailer
      },
      main: {},
      general: {
        releaseYear: movie.moviefields.releaseyear
      }
    }
  }
}

export default SingleTVShow
