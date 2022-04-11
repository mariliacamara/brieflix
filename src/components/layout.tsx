import Navbar from './navbar'
// import Footer from './footer'

const Layout: any = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout;