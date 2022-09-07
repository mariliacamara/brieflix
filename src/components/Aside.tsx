import Image from 'next/image'
import Link from 'next/link'
import {
  FilmSlate,
  FilmStrip,
  Popcorn,
  Star,
  Television,
  Ticket
} from 'phosphor-react'

export const Aside = () => {
  return (
    <aside className="w-72 h-screen bg-zinc-800 fixed" aria-label="Sidebar">
      <div className="overflow-hidden py-4 px-5 rounded relative">
        <div className="image--wrapper mt-6 mb-16">
          <Link href="/">
            <a>
              <Image
                src="/brieflix-red.png"
                width="300"
                height="100"
                alt="Brieflix"
              />
              <div className="shadow"></div>
            </a>
          </Link>
        </div>
        <ul className="space-y-2">
          <li>
            <a href="#" className="links--items group">
              <Star size={24} />
              <span className="links--items-span">Destaques</span>
            </a>
          </li>
          <li>
            <a href="#" className="links--items group">
              <Ticket size={24} />
              <span className="links--items-span">Em cartaz</span>
            </a>
          </li>
          <li>
            <a href="/filmes" className="links--items group">
              <Popcorn size={24} />
              <span className="links--items-span">Filmes</span>
            </a>
          </li>
          <li>
            <a href="#" className="links--items">
              <Television size={24} />
              <span className="links--items-span">Séries</span>
            </a>
          </li>
          <li>
            <a href="#" className="links--items">
              <FilmSlate size={24} />
              <span className="links--items-span">Direção</span>
            </a>
          </li>
          <li>
            <a href="#" className="links--items">
              <FilmStrip size={24} />
              <span className="links--items-span">Documentários</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
