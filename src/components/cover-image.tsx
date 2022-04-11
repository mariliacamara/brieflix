import Image from 'next/image'
import Link from 'next/link'

export default function CoverImage({ title, url, slug }: any) {
  const image = (
    <Image
      alt={`Cover Image for ${title}`}
      src={url}
      layout="fill"
      objectFit='cover'
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}