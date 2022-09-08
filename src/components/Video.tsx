import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export const YoutubeVideo = () => {
  return (
    <ReactPlayer
      width="100%"
      height="400px"
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
    />
  )
}
