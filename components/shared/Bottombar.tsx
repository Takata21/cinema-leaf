import Link from 'next/link'
import { BookmarkIcon, FilmIcon, HomeIcon, SearchIcon, TvIcon } from './icons'
import { FaFire } from 'react-icons/fa'
export function Bottombar() {
  return (
    <div className=" bottom-0 fixed bg-[#F7FAFC] w-full items-center p-3 xl:hidden flex justify-between">
      <Link className="group flex flex-col items-center space-y-1" href="#">
        <HomeIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block xl:hidden text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Home
        </span>
      </Link>
      <button className="group flex flex-col items-center space-y-1">
        <SearchIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block xl:hidden text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Search
        </span>
      </button>
      <Link className="group flex flex-col items-center space-y-1" href="#">
        <FaFire className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block xl:hidden text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Trending
        </span>
      </Link>
      <Link className="group flex flex-col items-center space-y-1" href="#">
        <FilmIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block xl:hidden text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Movies
        </span>
      </Link>
      <Link className="group flex flex-col items-center space-y-1" href="#">
        <TvIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block xl:hidden text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          TV Shows
        </span>
      </Link>
      <Link className="group flex flex-col items-center space-y-1" href="#">
        <BookmarkIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block xl:hidden text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Bookmarks
        </span>
      </Link>
    </div>
  )
}
