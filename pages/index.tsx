import {
  BookOpenIcon,
  BriefcaseIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/solid';
import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="mx-8 mt-12 flex flex-col text-center gap-y-12">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-9xl text-primary">館</h1>
        <h2 className="text-3xl">Nanachan no Toshokan</h2>
        <h3 className="text-xl text-primary-focus">
          Bienvenue dans la bibliothèque de Nanachan !
        </h3>
      </div>

      <div className="grid grid-rows-3 md:grid-cols-3 gap-4">
        <Link href="/lessons">
          <a className="btn btn-primary gap-2">
            <BriefcaseIcon className="h-6 w-6" />
            Séances
          </a>
        </Link>
        <Link href="/homeworks">
          <a className="btn btn-secondary gap-2">
            <BookOpenIcon className="h-6 w-6" />
            Devoirs
          </a>
        </Link>
        <Link href="/random">
          <a className="btn btn-accent gap-2">
            <QuestionMarkCircleIcon className="h-6 w-6" />
            Au hasard
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
