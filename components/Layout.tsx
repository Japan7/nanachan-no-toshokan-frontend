import {
  Bars3BottomLeftIcon,
  Bars3Icon,
  BookOpenIcon,
  BriefcaseIcon,
  HomeIcon,
  LanguageIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  WrenchIcon
} from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer">
      <input id="app-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="app-drawer" className="btn btn-square btn-ghost">
              <Bars3Icon className="h-6 w-6" />
            </label>
          </div>

          <div className="flex-1 px-2 mx-2">
            <Link href="/">
              <a>
                <span className="mr-2 text-2xl text-primary">館</span>
                <span>Nanachan no Toshokan</span>
              </a>
            </Link>
          </div>

          <button className="btn btn-square btn-ghost">
            <MagnifyingGlassIcon className="h-6 w-6" />
          </button>

          {/* <!-- Navbar menu content here --> */}
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link href="/">
                  <a>
                    <HomeIcon className="h-5 w-5" />
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/lessons">
                  <a>
                    <BookOpenIcon className="h-5 w-5" />
                    Séances
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/homeworks">
                  <a>
                    <BriefcaseIcon className="h-5 w-5" />
                    Devoirs
                  </a>
                </Link>
              </li>

              <li className="dropdown dropdown-end dropdown-hover">
                <label tabIndex={0} className="gap-2">
                  <WrenchIcon className="h-5 w-5" />
                  Outils
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit"
                >
                  <li>
                    <Link href="/kanjis">
                      <a>
                        <LanguageIcon className="h-5 w-5" />
                        Kanjis
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vocabulary">
                      <a>
                        <LanguageIcon className="h-5 w-5" />
                        Vocabulaire
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/monogatari">
                      <a>
                        <Bars3BottomLeftIcon className="h-5 w-5" />
                        Nanachan no Monogatari
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/grammar">
                      <a>
                        <PuzzlePieceIcon className="h-5 w-5" />
                        Points de grammaire
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        {/* Page content here */}
        <main className="container mx-auto">{children}</main>
      </div>

      <div className="drawer-side">
        <label htmlFor="app-drawer" className="drawer-overlay" />

        {/* <!-- Sidebar content here --> */}
        <div className="overflow-y-auto w-80 bg-base-100 flex flex-col items-center divide-y">
          <h1 className="text-3xl m-4">Bébouuuu !</h1>

          <ul className="menu p-4 w-full">
            <li>
              <Link href="/">
                <a>
                  <HomeIcon className="h-5 w-5" />
                  Accueil
                </a>
              </Link>
            </li>
            <li>
              <Link href="/lessons">
                <a>
                  <BookOpenIcon className="h-5 w-5" />
                  Séances
                </a>
              </Link>
            </li>
            <li>
              <Link href="/homeworks">
                <a>
                  <BriefcaseIcon className="h-5 w-5" />
                  Devoirs
                </a>
              </Link>
            </li>
          </ul>

          <ul className="menu p-4 w-full">
            <li>
              <Link href="/kanjis">
                <a>
                  <LanguageIcon className="h-5 w-5" />
                  Kanjis
                </a>
              </Link>
            </li>
            <li>
              <Link href="/vocabulary">
                <a>
                  <LanguageIcon className="h-5 w-5" />
                  Vocabulaire
                </a>
              </Link>
            </li>
            <li>
              <Link href="/monogatari">
                <a>
                  <Bars3BottomLeftIcon className="h-5 w-5" />
                  Nanachan no Monogatari
                </a>
              </Link>
            </li>
            <li>
              <Link href="/grammar">
                <a>
                  <PuzzlePieceIcon className="h-5 w-5" />
                  Points de grammaire
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
