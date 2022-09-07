import Image from 'next/image'

interface Props {
  title: string
  releaseYear: string
  featuredImage: string
}

export const MovieCard = (props: Props) => {
  const { title, releaseYear, featuredImage } = props
  return (
    <div className="py-3 w-[200px] h-[348px] hover:bg-zinc-800 shadow-lg sm:rounded-xl p-3 space-x-2 transition ease-in-out delay-150">
      <div className="flex flex-col  ">
        <div className="overflow-visible">
          <Image
            className="rounded-2xl shadow-lg"
            src={featuredImage}
            alt="Movie"
            height={400}
            width={275}
            objectFit="contain"
          />
        </div>
        <div className="space-y-4 mt-2">
          <div className="flex justify-between items-start gap-2">
            <h2 className="text-lg font-bold text-white">
              {title}
              <span className="text-sm text-gray-500 ml-1">{releaseYear}</span>
            </h2>
            <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
          </div>
        </div>
      </div>
    </div>
  )
}
