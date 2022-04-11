import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from "next/image";
import { getAllPostsWithSlug, getSinglePostBySlug } from '../../services/graphcms'
import styles from "../../styles/Post.module.css"
type PostProps = {
  post: {
    title: string,
    publishedAt: string,
    tags: Array<any>,
    coverImage: {
      url: string
    }
    content: {
      html: any
    }
  }
}

const Post: NextPage<PostProps> = ({post}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.featuredImage}>
        <Image src={ post.coverImage.url } alt={post.title} layout="fill"/>
      </div>
      <h2 className="title">{ post.title }</h2>
      <p>{ post.publishedAt }</p>
      <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params) {
    return {props: {post: {}}}
  }
  const post = await getSinglePostBySlug(params.slug as string);
  console.log(post.tags);
  return {props: {post}}
}

export default Post;