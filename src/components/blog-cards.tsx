import CoverImage from '../components/cover-image';
import Link from 'next/link'
import AvatarWithDate from './avatar-date';

const BlogCard: any = ({ 
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags, 
}: any) => {
  return (
    <div className="w-full lg:max-w-full lg:flex my-8 gap-8">
      <div className="relative h-80 lg:h-96 lg:w-96 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <CoverImage slug={slug} title={title} url={coverImage.url} />
      </div>
      <div className="cardInfo py-8">
        <ul>
          {tags.map((tag: any) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h3 className="mb-3 text-4xl font-medium leading-snug">
          <Link href={`/blog/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
        <AvatarWithDate name={author.name} picture={author.picture.url} date={date} />
      </div>
    </div>
  )
}

export default BlogCard;