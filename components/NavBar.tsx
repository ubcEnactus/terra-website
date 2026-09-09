'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`flex justify-between items-center px-[3%] py-[10px] transition-all duration-300 ${
          scrolled ? 'bg-[#03503D]' : 'bg-transparent'
        }`}
      >

        <Image
          src="/assets/terraLong.png"
          alt="Terra Logo"
          width={150}
          height={100}
          className="max-w-[150px]"
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

          <a href="mailto:terraubc@gmail.com">
            <button
              className={`px-5 py-[15px] bg-transparent border rounded-[5px] cursor-pointer transition-all duration-300 font-[Montserrat] ${
                scrolled
                  ? 'border-white text-white hover:bg-white hover:text-[#03503D]'
                  : 'border-[#03503D] text-[#03503D] hover:bg-[#03503D] hover:text-white'
              }`}
            >
              CONTACT US
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}