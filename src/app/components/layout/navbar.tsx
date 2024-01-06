import React, { useState } from 'react';
import Logo from '../model/logo';

const linkStyles = 'text-gray-500 hover:text-gray-700 transition duration-300';
const buttonStyles = 'rounded bg-gray-100 p-2 text-gray-600 hover:text-gray-700 transition duration-300';

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => (
  <a className={linkStyles} href={href}>
    {text}
  </a>
);

interface MobileMenuButtonProps {
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ toggleMenu }) => (
  <button onClick={toggleMenu} className={buttonStyles}>
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
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-25 border-black-500 border rounded-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 md:gap-12">
            <span className="sr-only">Home</span>
            <Logo />
            <nav aria-label="Global" className="hidden md:flex items-center gap-6 text-sm">
              <NavLink href="https://github.com/princetechs/mr_portfolio" text="Github" />
              <NavLink href="https://docs.google.com/document/d/1n3SuNcAKsHgg9dVBE-movXVDsHK3fWO7riazOaHh5Ro/edit?usp=sharing" text="Resume" />
              <NavLink href="/projects" text="Projects" />
            </nav>
          </div>

          <div className="md:hidden">
            <MobileMenuButton toggleMenu={toggleMobileMenu} />
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col items-center gap-4 text-sm">
            <NavLink href="https://github.com/princetechs/mr_portfolio" text="Github" />
            <NavLink href="/Resume_nov_2023.pdf" text="Resume" />
            <NavLink href="/projects" text="Projects" />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
