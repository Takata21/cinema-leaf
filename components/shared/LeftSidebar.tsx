import Link from 'next/link'
import { BookmarkIcon, FilmIcon, HomeIcon, SearchIcon, TvIcon } from './icons'
import { FaFire } from 'react-icons/fa'
import Image from 'next/image'

export function LeftSidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-24 bg-[#F7FAFC]  flex-col items-center py-10 space-y-2 hidden gap-5 xl:px-3 xl:flex">
      <Link href="/" className="flex flex-col justify-center items-center">
        <Image src="/logo.png" alt="logo" width={34} height={34} />
        <p>Cinema</p>
      </Link>
      <Link className="group flex flex-col items-center space-y-1" href="/">
        <HomeIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Home
        </span>
      </Link>
      <button className="group flex flex-col items-center space-y-1">
        <SearchIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Search
        </span>
      </button>
      <Link
        className="group flex flex-col items-center space-y-1"
        href="/trending"
      >
        <FaFire className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Trending
        </span>
      </Link>
      <Link
        className="group flex flex-col items-center space-y-1"
        href="/movies"
      >
        <FilmIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Movies
        </span>
      </Link>
      <Link className="group flex flex-col items-center space-y-1" href="/tv">
        <TvIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          TV Shows
        </span>
      </Link>
      <Link
        className="group flex flex-col items-center space-y-1"
        href="/bookmarks"
      >
        <BookmarkIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900" />
        <span className="hidden md:block text-xs text-gray-500 group-hover:text-gray-900 group-focus:text-gray-900">
          Bookmarks
        </span>
      </Link>
    </div>
  )
}
