import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { getAllPosts } from '../services/graphcms'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({posts}:any) => {
  return (
    <div>{JSON.stringify(posts)}</div>
  )
}

export default Home
