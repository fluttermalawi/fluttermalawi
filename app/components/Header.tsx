import { useState, useEffect } from 'react';
import { Link } from '@remix-run/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return;

      const target = event.target as Node | null;
      if (!target) return;

      const nav = document.querySelector('nav');
      const mobileMenu = document.querySelector('.mobile-menu');

      if (!nav?.contains(target) && !mobileMenu?.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mb-12 text-white bg-navy drop-shadow-md flex-1">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            className="flex items-center justify-center gap-3"
          >
            <img
              src={'/fluttermalawi.svg'}
              alt={'Logo'}
              width={24}
              height={24}
              className="object-contain"
            />
            <p className="font-bold tracking-tighter py-3">
              Flutter Malawi
            </p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">
              {isMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {/* SVG for menu icon */}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Projects
          </Link>
          <Link
            to="/events"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Events
          </Link>

          <Link
            to="/code-of-conduct"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Code of Conduct
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden mobile-menu" aria-modal="true">
          {/* Mobile menu content */}
        </div>
      )}
    </header>
  );
}
