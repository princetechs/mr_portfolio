import React from 'react';
import Logo from '../model/logo';

const linkStyles = 'text-gray-500 transition hover:text-gray-500/75';
const buttonStyles = 'rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75';

const NavLink = ({ href, text }) => (
  <li>
    <a className={linkStyles} href={href}>
      {text}
    </a>
  </li>
);

const MobileMenuButton = () => (
  <div className="block md:hidden">
    <button className={buttonStyles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
);

export default function Navbar() {
  return (
    <header className="sticky start-px z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 border-black-500 border rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <span className="sr-only">Home</span>
            <Logo />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <NavLink
                  href="https://github.com/princetechs/mr_portfolio"
                  text="Github"
                />
                <NavLink
                  href="/Resume_nov_2023.pdf"
                  text="Resume"
                />
                <NavLink
                  href="/"
                  text="Projects"
                />
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <MobileMenuButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
