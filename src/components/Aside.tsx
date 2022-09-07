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
    <aside
      className="w-72 h-screen border border-r-2 border-zinc-800 fixed flex flex-col justify-between"
      aria-label="Sidebar"
    >
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
          <p className="text-center text-zinc-300 mt-12 text-sm">
            Este é um acervo referente a toda filmografia e producões realizadas
            por Brie Larson, seja atuando, dirigindo ou narrando.{' '}
          </p>
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
            <a href="/series" className="links--items group">
              <Television size={24} />
              <span className="links--items-span">Séries</span>
            </a>
          </li>
          <li>
            <a href="#" className="links--items group">
              <FilmSlate size={24} />
              <span className="links--items-span">Direção</span>
            </a>
          </li>
          <li>
            <a href="#" className="links--items group">
              <FilmStrip size={24} />
              <span className="links--items-span">Documentários</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="py-4 px-5 text-white text-sm">
        Desenvolvido por Marília Câmara
      </div>
    </aside>
  )
}
