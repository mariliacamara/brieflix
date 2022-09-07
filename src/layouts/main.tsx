import { Aside } from '@/components/Aside'

interface Props {
  children: React.ReactNode
}

const Main = (props: Props) => {
  const { children } = props

  return (
    <>
      <Aside />
      <main className="main--section text-white">{children}</main>
    </>
  )
}

export default Main
