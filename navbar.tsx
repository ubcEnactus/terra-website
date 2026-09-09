'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 250);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        scrolled ? 'bg-[#03503D]' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center px-[3%] py-[10px]">

        <Image
          src="/assets/terraLong.png"
          alt="Terra Logo"
          width={150}
          height={50}
          className="max-w-[150px]"
        />

        <div className="hidden md:flex justify-between items-center">
          <a
            href="#partners"
            className={`px-[20px] py-[20px] font-extralight no-underline transition-all duration-300 ${
              scrolled ? 'text-white' : 'text-[#03503D]'
            }`}
          >
            PARTNERS
          </a>

          <a href="mailto:terraubc@gmail.com" className="no-underline">
            <button
              className={`px-[20px] py-[15px] bg-transparent rounded-[5px] cursor-pointer font-[inherit] text-[inherit] transition-all duration-300 ${
                scrolled
                  ? 'border border-white text-white hover:bg-white hover:text-[#03503D]'
                  : 'border border-[#03503D] text-[#03503D] hover:bg-[#03503D] hover:text-white'
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