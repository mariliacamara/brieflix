import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string
  releaseYear: string
  featuredImage: string
  slug: string
  projectType: string
}

export const MovieCard = (props: Props) => {
  const { title, releaseYear, featuredImage, slug, projectType } = props

  const noImage = '/no-image.png'

  return (
    <div className="py-3 w-[200px] h-[310px] hover:bg-zinc-800 shadow-lg sm:rounded-xl p-3 space-x-2 transition ease-in-out delay-150">
      <div className="flex flex-col  ">
        <Link href={`/${projectType}/${slug}`}>
          <a>
            <div className="overflow-visible">
              <Image
                className="rounded-2xl shadow-lg"
                src={featuredImage ? featuredImage : noImage}
                alt="Movie"
                height={360}
                width={300}
                objectFit="cover"
              />
            </div>
          </a>
        </Link>
        <div className="space-y-4 mt-2">
          <div className="flex justify-between items-start gap-2">
            <Link href={`/${projectType}/${slug}`}>
              <a>
                <h2 className="text-lg font-bold text-white">
                  {title}
                  <span className="text-sm text-gray-500 ml-1 font-light">
                    {releaseYear}
                  </span>
                </h2>
              </a>
            </Link>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
          </div>
        </div>
      </div>
    </div>
  )
}
