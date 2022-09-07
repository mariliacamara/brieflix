import { Aside } from '@/components/Aside'

interface Props {
  children: React.ReactNode
}

const Main = (props: Props) => {
  const { children } = props
  return (
    <>
      <Aside />
      <main className="main--section ml-80 mt-6 pr-6">{children}</main>
    </>
  )
}

export default Main
