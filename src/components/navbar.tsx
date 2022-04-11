import Link from "next/link";

const Navbar = () => {
  const homeUrl = "http://localhost"
  return (
    <div className="header z-50">
    <nav className="navigation">
      <Link href="/">
        <a className="logo">nome</a>
      </Link>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
        <svg
          className="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div className="menu hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul>
          <li>
            <a href="#" aria-current="page">sobre</a>
          </li>
          <li>
            <a href="#services">serviços</a>
          </li>
          <li>
            <a href="#experiences">experiências</a>
          </li>
          <li>
            <a href="#jobs">clientes</a>
          </li>
          <li>
            <a href="#">contato</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default Navbar;
