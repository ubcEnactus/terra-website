'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-100 w-full">
      <nav
        className={`flex justify-between items-center px-[3%] py-2.5 transition-all duration-300 ${
          scrolled ? 'bg-[#03503D]' : 'bg-transparent'
        }`}
      >

        <Image
          src="/assets/terraLong.png"
          alt="Terra Logo"
          width={150}
          height={100}
          className="max-w-37.5"
        />

        {/* Nav Links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#partners"
            className={`px-5 py-5 font-light no-underline transition-colors duration-300 ${
              scrolled ? 'text-white' : 'text-[#03503D]'
            }`}
          >
            PARTNERS
          </Link>

          {/* TO BE: /Contact for contact form page */}
          <a href="mailto:terraubc@gmail.com">
            <button
              className={`px-5 py-3.75 bg-transparent border rounded-[5px] cursor-pointer transition-all duration-300 font-[Montserrat] ${
                scrolled
                  ? 'border-white text-white hover:bg-white hover:text-[#03503D]'
                  : 'border-[#03503D] text-[#03503D] hover:bg-[#03503D] hover:text-white'
              }`}
            >
              CONTACT US
            </button>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 cursor-pointer ${
            scrolled ? 'text-white' : 'text-[#03503D]'
          }`}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-2 px-[5%] py-4 transition-all duration-300 ${
            scrolled ? 'bg-[#03503D]' : 'bg-white'
          }`}
        >
          <Link
            href="#partners"
            onClick={() => setMobileOpen(false)}
            className={`px-5 py-3 font-light no-underline transition-colors duration-300 ${
              scrolled ? 'text-white' : 'text-[#03503D]'
            }`}
          >
            PARTNERS
          </Link>

          <a href="mailto:terraubc@gmail.com" onClick={() => setMobileOpen(false)}>
            <button
              className={`px-5 py-3.75 bg-transparent border rounded-[5px] cursor-pointer transition-all duration-300 font-[Montserrat] ${
                scrolled
                  ? 'border-white text-white hover:bg-white hover:text-[#03503D]'
                  : 'border-[#03503D] text-[#03503D] hover:bg-[#03503D] hover:text-white'
              }`}
            >
              CONTACT US
            </button>
          </a>
        </div>
      )}
    </header>
  );
}