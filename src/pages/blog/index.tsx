import type { NextPage } from 'next';
import BlogCard from '../../components/blog-cards';
import { getAllPosts } from '../../services/graphcms';
import styles from "../../styles/Blog.module.css";

const Blog: NextPage = ({posts}:any) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.pageTitle}>
        Blog
      </h2>
      <p className={styles.pageDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

      {posts.map((post: any) => (
        <BlogCard
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.publishedAt}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
          />
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    },
    revalidate: 1,
  }
}

export default Blog
