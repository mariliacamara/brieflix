import Image from 'next/image'
import Link from 'next/link'

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

interface Props {
  streamings: Streamings
}

export const StreamingBadges = (props: Props) => {
  const { streamings } = props
  return (
    <div className="p-2 border rounded-lg border-zinc-700 flex flex-row gap-2 flex-wrap max-w-[450px]">
      {streamings.netflix && (
        <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center">
          <Link href={`/${streamings.netflix}`}>
            <a className="w-[60px] h-[60px]">
              <div className="relative inline-block w-[60px] h-[60px]">
                <Image
                  src="/streamings/netflix.png"
                  alt="Netflix"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
      )}

      {streamings.hboMax && (
        <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center">
          <Link href={`/${streamings.hboMax}`}>
            <a className="w-[60px] h-[60px]">
              <div className="relative inline-block w-[60px] h-[60px]">
                <Image
                  src="/streamings/hbomax.webp"
                  alt="HBO Max"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
      )}

      {streamings.disneyPlus && (
        <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center">
          <Link href={`/${streamings.disneyPlus}`}>
            <a className="w-[60px] h-[60px]">
              <div className="relative inline-block w-[60px] h-[60px]">
                <Image
                  src="/streamings/disneyplus.png"
                  alt="Disney Plus"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
      )}

      {streamings.starPlus && (
        <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center">
          <Link href={`/${streamings.starPlus}`}>
            <a className="w-[60px] h-[60px]">
              <div className="relative inline-block w-[60px] h-[60px]">
                <Image
                  src="/streamings/starplus.png"
                  alt="Star Plus"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
      )}

      {streamings.primeVideo && (
        <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center">
          <Link href={`/${streamings.primeVideo}`}>
            <a className="w-[60px] h-[60px]">
              <div className="relative inline-block w-[60px] h-[60px]">
                <Image
                  src="/streamings/primevideo2.png"
                  alt="Prime Video"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
      )}

      {streamings.paramount && (
        <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center">
          <Link href={`/${streamings.paramount}`}>
            <a className="w-[60px] h-[60px]">
              <div className="relative inline-block w-[60px] h-[60px]">
                <Image
                  src="/streamings/paramount.png"
                  alt="Paramount"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
      )}

      {streamings.telecine && (
        <div className="bg-white w-[80px] h-[80px] rounded-md flex items-center justify-center">
          <Link href={`/${streamings.telecine}`}>
            <a className="w-[60px] h-[60px]">
              <div className="relative inline-block w-[60px] h-[60px]">
                <Image
                  src="/streamings/telecine.png"
                  alt="Telecine"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </Link>
        </div>
      )}
    </div>
  )
}
