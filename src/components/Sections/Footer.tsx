import {BoltIcon, ChevronUpIcon} from '@heroicons/react/24/solid';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <div className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
        href={`/#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-500">
        <Socials />
      </div>
      <a
        className="-m-2 flex items-center gap-x-1 rounded-md p-2 focus:outline-none focus:ring-2 hover:ring-yellow transition-all duration-300 ease-in-out"
        href="https://github.com/randall-liao/react-frontend-cloud-resume"
        rel="noopener noreferrer"
        target="_blank">
        <BoltIcon className="h-5 w-5 text-yellow" />
        <span className="text-sm">
          The source code for this website is available on <span className="text-white font-semibold">GitHub</span>.
        </span>
      </a>
      <div className="text-center text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Randall Liao. All rights reserved.</p>
        <p className="mt-1">
          Licensed under the <span className="text-white font-semibold">MIT License</span>.
        </p>
      </div>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
